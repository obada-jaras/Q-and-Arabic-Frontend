import { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordField = ({ name, id, placeholder, autoComplete }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<FormGroup className="position-relative">
			<Input
				type={showPassword ? 'text' : 'password'}
				name={name}
				id={id}
				placeholder={placeholder}
				autoComplete={autoComplete}
				className="rounded-3 mt-3"
			/>
			{showPassword ? (
				<AiOutlineEyeInvisible
					className="position-absolute top-50 start-0 translate-middle-y ms-2 cursor-pointer"
					onClick={handlePasswordVisibility}
				/>
			) : (
				<AiOutlineEye
					className="position-absolute top-50 start-0 translate-middle-y ms-2 cursor-pointer"
					onClick={handlePasswordVisibility}
				/>
			)}
		</FormGroup>
	);
};

export default PasswordField;
