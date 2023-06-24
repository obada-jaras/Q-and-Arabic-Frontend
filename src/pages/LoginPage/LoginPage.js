import "./LoginPage.css"
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-title">تسجيل الدخول</h2>
      <p className="login-subtitle">للوصول إلى جميع المميزات</p>

      <div className="login-container">
        <LoginForm />
        <p className="register-link">ليس لديك حساب؟ <a href="/register">إنشاء حساب</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
