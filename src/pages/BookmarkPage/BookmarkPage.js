import React, { useEffect, useState } from 'react';
import SessionCard from '../../components/SessionCard/SessionCard';
import { fetchBookmarkedSessions } from '../../services/bookmark';

const BookmarkPage = () => {
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const bookmarkedSessions = await fetchBookmarkedSessions();
				setSessions(bookmarkedSessions);
			} catch (error) {
				console.error('Failed to fetch bookmarked sessions: ', error);
			}
		})();
	}, []);

	return (
		<div className="mt-5">
			<h1 className="mb-4">المحفوظات</h1>
			{sessions.map((session) => (
				<SessionCard key={session.id} session={session} />
			))}
		</div>
	);
};

export default BookmarkPage;
