import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { Container } from 'reactstrap';

import './assets/Styles/Theme.css';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Footer from './components/Footer/Footer';

import {
	HOME_URL,
	HISTORY_URL,
	BOOKMARK_URL,
	LOGIN_URL,
	REGISTER_URL,
} from './constants/frontendUrls';

function App() {
	return (
		<Router basename="/Q-and-Arabic-Frontend">
			<RouteContent />
		</Router>
	);
}

function RouteContent() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== LOGIN_URL &&
				location.pathname !== REGISTER_URL && <Header />}

			<Container className="main-content">
				<Routes>
					<Route path={LOGIN_URL} element={<LoginPage />} />
					<Route path={REGISTER_URL} element={<RegisterPage />} />
					<Route path={HOME_URL} element={<HomePage />} />
					<Route path={HISTORY_URL} element={<HistoryPage />} />
					<Route path={BOOKMARK_URL} element={<BookmarkPage />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Container>

			<Footer />
		</>
	);
}

export default App;
