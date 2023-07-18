import React from 'react';
import { Button } from 'reactstrap';
import { FiCopy, FiPrinter } from 'react-icons/fi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { bookmarkQA } from '../../../services/bookmarkQA';

const QATools = ({ queryId, qaList, isBookmarked, setIsBookmarked }) => {
	const copyAllToClipboard = () => {
		const textToCopy = qaList
			.map((qa) => `${qa.question}\n\n${qa.answer}`)
			.join('\n\n');
		navigator.clipboard.writeText(textToCopy);
	};

	const addToBookmarks = async () => {
		try {
			await bookmarkQA(queryId);
			setIsBookmarked(!isBookmarked);
		} catch (error) {
			window.alert('Failed to update bookmark: ', error);
		}
	};

	const printAll = () => {
		const textToPrint = qaList
			.map((qa) => `${qa.question}\n\n${qa.answer}`)
			.join('\n\n');
		const newWindow = window.open('', '_blank');
		newWindow.document.write(textToPrint);
		newWindow.print();
	};

	return (
		<div className="d-flex flex-row-reverse">
			<Button
				className="border-0 color-black bg-transparent bg-gray-hover fs-4"
				onClick={copyAllToClipboard}
			>
				<FiCopy />
				{/* نسخ الكل */}
			</Button>
			<Button
				className="border-0 color-black bg-transparent bg-gray-hover fs-4"
				onClick={addToBookmarks}
			>
				{isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
				{/* حفظ */}
			</Button>
			<Button
				className="border-0 color-black bg-transparent bg-gray-hover fs-4"
				onClick={printAll}
			>
				<FiPrinter />
				{/* طباعة */}
			</Button>
		</div>
	);
};

export default QATools;
