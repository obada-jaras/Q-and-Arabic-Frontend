import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { bookmarkQA } from '../../services/bookmarkQA'; 
import { FRONTEND_ROUTES } from '../../constants/frontendUrls';

const SessionCard = ({ session }) => {
	const [isBookmarked, setIsBookmarked] = useState(session.bookmarked);

	const handleBookmarkClick = async () => {
		try {
			await bookmarkQA(session.id);
			setIsBookmarked(!isBookmarked);
		} catch (error) {
			console.error('Failed to toggle bookmark: ', error);
		}
	};

	return (
		<Card className="mb-4 bg-gray-hover">
			<Link
				to={FRONTEND_ROUTES.SESSION.replace(':id', session.id)}
				className="color-black text-decoration-none"
			>
				<CardBody>
					<CardTitle
						tag="h5"
						className="color-primary mb-3 position-relative"
					>
						{session.title
							? session.title
							: session.text.slice(0, 100)}
					</CardTitle>
					<CardText>عدد الأسئلة: {session.qapairs.length}</CardText>
				</CardBody>
			</Link>

			<Button
				className="position-absolute top-0 start-0 mt-2 me-2 color-primary"
				color="link"
				onClick={handleBookmarkClick}
			>
				{isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
			</Button>
		</Card>
	);
};

export default SessionCard;
