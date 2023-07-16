import { Button, Form, FormGroup, Input } from 'reactstrap';
import PasswordField from '../../../components/PasswordField/PasswordField';

const RegisterForm = () => {
	return (
		<Form className="px-3">
			<FormGroup>
				<Input
					type="text"
					name="username"
					id="username"
					placeholder="اسم المستخدم"
					autoComplete="username"
					className="rounded-3 mt-3"
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
				/>
			</FormGroup>

			<PasswordField
				name="password"
				id="password"
				placeholder="كلمة المرور"
				autoComplete="new-password"
			/>

			<Button color="primary" className="w-100 mt-5">
				إنشاء حساب
			</Button>
		</Form>
	);
};

export default RegisterForm;
