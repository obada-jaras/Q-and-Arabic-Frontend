import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/Styles/Fonts.css';
import './assets/Styles/Reset.css';
import './assets/Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Styles/BootstrapOverride.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
