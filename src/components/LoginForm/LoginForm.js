import "./LoginForm.css"
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AiOutlineEye } from "react-icons/ai";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form className="login-form">
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="البريد الإلكتروني" autoComplete="username"/>
      </FormGroup>

      <FormGroup className="password-group">
        <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="كلمة المرور" autoComplete="current-password" />
        <AiOutlineEye className="toggle-password" onClick={handlePasswordVisibility} />
      </FormGroup>

      <div className="forgot-password">
        <FormText color="muted">
          نسيت كلمة المرور
        </FormText>
      </div>

      <Button className="login-button">تسجيل الدخول</Button>
    </Form>
  );
}

export default LoginForm;
