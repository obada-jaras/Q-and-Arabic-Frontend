import React from 'react';
import QAItem from './QAItem/QAItem';

function QAList({ qaList }) {
	return (
		<div className="mt-1">
			{qaList.map((qa, index) => (
				<QAItem key={index} qa={qa} />
			))}
		</div>
	);
}

export default QAList;
