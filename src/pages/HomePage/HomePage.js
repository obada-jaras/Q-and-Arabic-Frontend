import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import { ProgressBar } from 'react-bootstrap';

import Box from './Box/Box';
import ModelOptions from './ModelOptions/ModelOptions';
import QATools from './QATools/QATools';
import QAList from './QAList/QAList';
import { generateQA } from '../../services/generateQA';
import sessionService from '../../services/session';

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [progress, setProgress] = useState(0);

	const [qaList, setQAList] = useState([]);
	const [queryId, setQueryId] = useState(null);
	const [showQA, setShowQA] = useState(false);

	const [context, setContext] = useState('');
	const [title, setTitle] = useState('');
	const [QGModel, setQGModel] = useState('AraT5');
	const [QAModel, setQAModel] = useState('AraT5');
	const [numQuestions, setNumQuestions] = useState(1);
	const [isBookmarked, setIsBookmarked] = useState(false);

	const { id } = useParams();

	const outputRef = useRef(null);

	useEffect(() => {
		if (id) {
			fetchSessionData();
		}
	}, [id]);

	useEffect(() => {
		let interval;
		const C = 0.05; // Adjust this to control the slowing down rate
		if (isLoading) {
			interval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= numQuestions) {
						clearInterval(interval);
						return numQuestions;
					}
					return prev + C / Math.log(prev + 2);
				});
			}, 500);
		}
		return () => clearInterval(interval);
	}, [isLoading, numQuestions]);

	useEffect(() => {
		if (showQA && outputRef.current) {
			outputRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [showQA]);

	const fetchSessionData = async () => {
		try {
			const data = await sessionService.getSession(id);

			//populate the state with the fetched data
			setContext(data.text);
			setTitle(data.title);
			setQGModel(data.ai_model.split(',')[0]);
			setQAModel(data.ai_model.split(',')[1]);
			setNumQuestions(data.num_of_questions);
			setIsBookmarked(data.bookmarked);
			setQAList(data.qapairs);
			setQueryId(data.id);
			setShowQA(true);
		} catch (error) {
			window.alert('Failed to fetch session data: ', error);
		}
	};

	const generateQuestionsAndAnswers = async () => {
		setIsLoading(true);
		setProgress(0);

		try {
			const response = await generateQA(
				context,
				QGModel,
				QAModel,
				numQuestions,
				title,
			);
			setQAList(response.qapairs);
			setQueryId(response.id);
			setIsBookmarked(response.bookmarked);
			setShowQA(true);
		} catch (error) {
			window.alert('Failed to generate questions and answers: ', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="d-flex mt-5 flex-column ">
			<Box
				setContext={setContext}
				context={context}
				setTitle={setTitle}
			/>

			<ModelOptions
				QGModel={QGModel}
				QAModel={QAModel}
				numQuestions={numQuestions}
				setQGModel={setQGModel}
				setQAModel={setQAModel}
				setNumQuestions={setNumQuestions}
			/>

			<div className="d-flex justify-content-center">
				<Button
					color="primary"
					className="mt-5 px-5"
					onClick={generateQuestionsAndAnswers}
					disabled={isLoading}
				>
					{isLoading ? (
						<Spinner size="sm" color="light" />
					) : (
						'إنشاء الأسئلة وإجاباتها'
					)}
				</Button>
			</div>

			{isLoading && (
				<ProgressBar
					now={(Math.exp(progress) / numQuestions) * 100}
					striped
					animated
					className="mt-3"
				/>
			)}

			{showQA && (
				<div ref={outputRef}>
					<QATools
						queryId={queryId}
						qaList={qaList}
						isBookmarked={isBookmarked}
						setIsBookmarked={setIsBookmarked}
					/>
					<QAList qaList={qaList} />
				</div>
			)}
		</div>
	);
};

export default HomePage;
