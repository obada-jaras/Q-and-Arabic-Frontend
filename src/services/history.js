import axios from 'axios';
import { getAuthToken } from './auth';
import { BACKEND_API_ROUTES } from '../constants/backendApi';

export async function fetchHistory() {
	try {
		const authToken = getAuthToken();

		const response = await axios.get(BACKEND_API_ROUTES.HISTORY, {
			headers: {
				Authorization: `Token ${authToken}`,
			},
		});

		return response.data;
	} catch (error) {
		throw error;
	}
}
