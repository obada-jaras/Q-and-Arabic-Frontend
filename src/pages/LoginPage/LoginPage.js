import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="container d-flex flex-column text-center vh-100 py-5">
      <div className="row">
        <div className="col">
          <h2 className="mt-5">تسجيل الدخول</h2>
          <p className="text-secondary">للوصول إلى جميع المميزات</p>
        </div>
      </div>

      <div className="row px-3 px-sm-0">
        <div className="col-12 col-sm-6 col-md-4 bg-light p-4 border border-dark rounded-4 my-5 mx-auto">
          <LoginForm />
          <p className="mt-4 text-secondary">ليس لديك حساب؟ <a href="/register" className="text-decoration-underline text-secondary">إنشاء حساب</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
