import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/bookmark" component={BookmarkPage} />
        <Route path="/" exact component={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
