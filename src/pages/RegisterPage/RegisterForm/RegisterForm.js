import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { registerUser } from '../../../services/registration';
import PasswordField from '../../../components/PasswordField/PasswordField';
import { FRONTEND_ROUTES } from '../../../constants/frontendUrls';

const RegisterForm = () => {
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = {
			username: event.target.username.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};

		try {
			await registerUser(user);
			navigate(FRONTEND_ROUTES.LOGIN);
		} catch (error) {
			window.alert(error.message);
		}
	};

	return (
		<Form className="px-3" onSubmit={handleSubmit}>
			<FormGroup>
				<Input
					type="text"
					name="username"
					id="username"
					placeholder="اسم المستخدم"
					autoComplete="username"
					className="rounded-3 mt-3"
					required
				/>
			</FormGroup>

			<FormGroup>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="البريد الإلكتروني"
					autoComplete="email"
					className="rounded-3 mt-3"
					required
				/>
			</FormGroup>

			<PasswordField
				name="password"
				id="password"
				placeholder="كلمة المرور"
				autoComplete="new-password"
				required
			/>

			<Button color="primary" className="w-100 mt-5" type="submit">
				إنشاء حساب
			</Button>
		</Form>
	);
};

export default RegisterForm;
