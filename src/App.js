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
import { FRONTEND_ROUTES } from './constants/frontendUrls';

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
			{location.pathname !== FRONTEND_ROUTES.LOGIN &&
				location.pathname !== FRONTEND_ROUTES.REGISTER && <Header />}

			<Container className="main-content">
				<Routes>
					<Route
						path={FRONTEND_ROUTES.LOGIN}
						element={<LoginPage />}
					/>
					<Route
						path={FRONTEND_ROUTES.REGISTER}
						element={<RegisterPage />}
					/>
					<Route path={FRONTEND_ROUTES.HOME} element={<HomePage />} />
					<Route
						path={FRONTEND_ROUTES.HISTORY}
						element={<HistoryPage />}
					/>
					<Route
						path={FRONTEND_ROUTES.BOOKMARK}
						element={<BookmarkPage />}
					/>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Container>

			<Footer />
		</>
	);
}

export default App;
