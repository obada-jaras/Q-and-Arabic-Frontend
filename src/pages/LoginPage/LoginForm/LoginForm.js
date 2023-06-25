import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import PasswordField from '../../../components/PasswordField/PasswordField';

const LoginForm = () => {
  return (
    <Form className="px-3">
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="البريد الإلكتروني" autoComplete="username" className="rounded-3 mt-3" />
      </FormGroup>

      <PasswordField name="password" id="password" placeholder="كلمة المرور" autoComplete="current-password"/>

      <a href="https://" className="text-decoration-none text-primary small float-end me-1">
        نسيت كلمة المرور؟
      </a>

      <Button color="primary" className="w-100 mt-5">تسجيل الدخول</Button>
    </Form>
  );
}

export default LoginForm;
