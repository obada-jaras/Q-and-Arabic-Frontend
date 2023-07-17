import React, { useEffect, useState } from 'react';
import SessionCard from '../../components/SessionCard/SessionCard';
import { fetchHistory } from '../../services/history';

const HistoryPage = () => {
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const historySessions = await fetchHistory();
				setSessions(historySessions);
			} catch (error) {
				console.error('Failed to fetch history sessions: ', error);
			}
		})();
	}, []);

	return (
		<div className="mt-5">
			<h1 className="mb-4">السجل</h1>
			{sessions.map((session) => (
				<SessionCard
					key={session.id}
					session={session}
				/>
			))}
		</div>
	);
};

export default HistoryPage;
