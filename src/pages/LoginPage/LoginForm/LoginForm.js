import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { loginUser } from '../../../services/login';
import { FRONTEND_ROUTES } from '../../../constants/frontendUrls';
import PasswordField from '../../../components/PasswordField/PasswordField';

const LoginForm = () => {
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = {
			username: event.target.username.value,
			password: event.target.password.value,
		};

		try {
			await loginUser(user);
			navigate(FRONTEND_ROUTES.HOME);
		} catch (error) {
			window.alert(error.message);
		}
	};

	return (
		<Form className="px-3" onSubmit={handleSubmit}>
			<FormGroup>
				<Input
					name="username"
					id="username"
					placeholder="اسم المستخدم"
					autoComplete="username"
					className="rounded-3 mt-3"
				/>
			</FormGroup>

			<PasswordField
				name="password"
				id="password"
				placeholder="كلمة المرور"
				autoComplete="current-password"
			/>

			<a
				href="https://"
				className="text-decoration-none text-primary small float-end me-1"
			>
				نسيت كلمة المرور؟
			</a>

			<Button color="primary" className="w-100 mt-5">
				تسجيل الدخول
			</Button>
		</Form>
	);
};

export default LoginForm;
