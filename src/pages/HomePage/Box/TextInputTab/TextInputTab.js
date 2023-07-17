import React from 'react';
import { Input } from 'reactstrap';

const TextInputTab = ({ context, setContext }) => {
	const handleTextChange = (e) => {
		setContext(e.target.value);
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
