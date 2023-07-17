import axios from 'axios';
import { BACKEND_API_ROUTES } from '../constants/backendApi';

export async function registerUser(user) {
	try {
		const response = await axios.post(BACKEND_API_ROUTES.REGISTER, user);
		return response.data;
	} catch (error) {
		throw error;
	}
}
