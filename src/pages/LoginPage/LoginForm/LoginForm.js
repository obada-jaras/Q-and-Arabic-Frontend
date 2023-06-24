import './LoginForm.css';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form className="px-3">
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="البريد الإلكتروني" autoComplete="username" className="rounded-3 mt-3" />
      </FormGroup>

      <FormGroup className="position-relative">
        <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="كلمة المرور" autoComplete="current-password" className="rounded-3 mt-3" />
        {showPassword ? 
          <AiOutlineEyeInvisible className="position-absolute top-50 start-0 translate-middle-y ms-2 cursor-pointer" onClick={handlePasswordVisibility} /> :
          <AiOutlineEye className="position-absolute top-50 start-0 translate-middle-y ms-2 cursor-pointer" onClick={handlePasswordVisibility} />
        }
      </FormGroup>

      <a href="https://" className="text-decoration-none text-primary small float-end me-1">
        نسيت كلمة المرور؟
      </a>

      <Button color="primary" className="w-100 mt-5">تسجيل الدخول</Button>
    </Form>
  );
}

export default LoginForm;
