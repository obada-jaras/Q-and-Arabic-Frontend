import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';

import './assets/Styles/Theme.css';
import './App.css'

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <RouteContent />
    </Router>
  );
}

function RouteContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header />}

      <Container className="main-content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;
