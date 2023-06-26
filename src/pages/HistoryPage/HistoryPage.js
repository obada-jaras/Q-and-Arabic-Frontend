import React, { useEffect, useState } from 'react';
import SessionCard from '../../components/SessionCard/SessionCard';

const HistoryPage = () => {
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		// Replace this with your API fetching logic
		const historySessions = [
			{
				id: 1,
				inputText:
					'تعد جامعة بيرزيت الأولى من نوعها في فلسطين والشتات...',
				fileGenerated: false,
				fileName: null,
				questionCount: 3,
				bookmarked: false,
			},
			{
				id: 2,
				inputText: null,
				fileGenerated: true,
				fileName: 'document222.pdf',
				questionCount: 5,
				bookmarked: true,
			},
		];
		setSessions(historySessions);
	}, []);

	return (
		<div className="mt-5">
			<h1 className="mb-4">السجل</h1>
			{sessions.map((session) => (
				<SessionCard
					key={session.id}
					session={session}
					bookmarked={true}
				/>
			))}
		</div>
	);
};

export default HistoryPage;
