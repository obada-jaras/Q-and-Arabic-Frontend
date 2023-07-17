import React from 'react';
import { Input } from 'reactstrap';

const TextInputTab = ({ context, setContext, setTitle }) => {
	function getFirstWords(text, numberOfWords) {
		const words = text.split(' ');
		const firstNWords = words.slice(0, numberOfWords);
		return firstNWords.join(' ');
	}

	const handleTextChange = (e) => {
		setContext(e.target.value);
		setTitle(getFirstWords(e.target.value, 5));
	};

	return (
		<div>
			<Input
				type="textarea"
				placeholder="أدخل النص هنا..."
				rows={10}
				value={context}
				onChange={handleTextChange}
			/>
		</div>
	);
};

export default TextInputTab;
