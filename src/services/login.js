import axios from 'axios';
import { saveAuthToken } from './auth';
import { BACKEND_API_ROUTES } from '../constants/backendApi';

export async function loginUser(user) {
	try {
		const response = await axios.post(BACKEND_API_ROUTES.LOGIN, user);
		saveAuthToken(response.data.token);
		return response.data;
	} catch (error) {
		throw error;
	}
}
