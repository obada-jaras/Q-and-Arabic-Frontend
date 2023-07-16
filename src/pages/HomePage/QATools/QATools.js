import React from 'react';
import { Button } from 'reactstrap';
import { FiCopy, FiBookmark, FiPrinter } from 'react-icons/fi';

const QATools = ({ qaList }) => {
	const copyAllToClipboard = () => {
		const textToCopy = qaList
			.map((qa) => `${qa.question}\n\n${qa.answer}`)
			.join('\n\n');
		navigator.clipboard.writeText(textToCopy);
	};

	const addToBookmarks = () => {
		// Add functionality here
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
				<FiBookmark />
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
