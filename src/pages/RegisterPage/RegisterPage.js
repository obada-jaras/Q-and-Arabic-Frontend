import React from 'react';
import RegisterForm from './RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="container d-flex flex-column text-center py-5">
      <div className="row">
        <div className="col">
          <h2 className="mt-5">إنشاء حساب</h2>
          <p className="text-secondary">للوصول إلى جميع المميزات</p>
        </div>
      </div>

      <div className="row px-3 px-sm-0">
        <div className="col-12 col-sm-6 col-md-4 bg-light p-4 border border-dark rounded-4 my-5 mx-auto">
          <RegisterForm />
          <p className="mt-4 text-secondary">لديك حساب بالفعل؟ <a href="./login" className="text-decoration-underline text-secondary">تسجيل الدخول</a></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
