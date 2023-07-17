import React, { useState } from 'react';
import { Button } from 'reactstrap';

import Box from './Box/Box';
import ModelOptions from './ModelOptions/ModelOptions';
import QATools from './QATools/QATools';
import QAList from './QAList/QAList';
import { generateQA } from '../../services/generateQA';

const HomePage = () => {
	const [qaList, setQAList] = useState([]);
	const [showQA, setShowQA] = useState(false);

	const [context, setContext] = useState('');
	const [title, setTitle] = useState('');
	const [QGModel, setQGModel] = useState('AraT5');
	const [QAModel, setQAModel] = useState('AraT5');
	const [numQuestions, setNumQuestions] = useState(1);

	const generateQuestionsAndAnswers = async () => {
		try {
			const response = await generateQA(
				context,
				QGModel,
				QAModel,
				numQuestions,
				title,
			);
			setQAList(response.qapairs);
			setShowQA(true);
		} catch (error) {
			window.alert('Failed to generate questions and answers: ', error);
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
				>
					إنشاء الأسئلة وإجاباتها
				</Button>
			</div>

			{showQA && <QATools qaList={qaList} />}
			{showQA && <QAList qaList={qaList} />}
		</div>
	);
};

export default HomePage;
