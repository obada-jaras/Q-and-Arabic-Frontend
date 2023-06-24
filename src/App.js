import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/Styles/Theme.css';

import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/" exact element={<LoginPage />} />
      </Routes>
      
      <Footer />
    </Router>

  );
}

export default App;
