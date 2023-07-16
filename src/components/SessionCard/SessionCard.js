// SessionCard.js
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const SessionCard = ({ session }) => {
	return (
		<Card className="mb-4 bg-gray-hover">
			<Link
				to={`/session/${session.id}`}
				className="color-black text-decoration-none"
			>
				<CardBody>
					<CardTitle
						tag="h5"
						className="color-primary mb-3 position-relative"
					>
						{session.fileGenerated
							? session.fileName
							: session.inputText.slice(0, 100)}
					</CardTitle>
					<CardText>عدد الأسئلة: {session.questionCount}</CardText>
				</CardBody>
			</Link>

			<Button
				className="position-absolute top-0 start-0 mt-2 me-2 color-primary"
				color="link"
				onClick={() => {
					/* Implement bookmark/unbookmark functionality */
				}}
			>
				{session.bookmarked ? <FaBookmark /> : <FaRegBookmark />}
			</Button>
		</Card>
	);
};

export default SessionCard;
