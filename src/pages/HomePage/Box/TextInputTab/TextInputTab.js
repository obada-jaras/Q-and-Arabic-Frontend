import React from 'react';
import { Input } from 'reactstrap';

const TextInputTab = () => {
	return (
		<div>
			<Input type="textarea" placeholder="أدخل النص هنا..." rows={10} />
		</div>
	);
};

export default TextInputTab;
