import axios from 'axios';
import { getAuthToken } from './auth';
import { BACKEND_API_ROUTES } from '../constants/backendApi';

export async function fetchBookmarkedSessions() {
	try {
		const authToken = getAuthToken();

		const response = await axios.get(
			BACKEND_API_ROUTES.BOOKMARKED_SESSIONS,
			{
				headers: {
					Authorization: `Token ${authToken}`,
				},
			},
		);

		return response.data;
	} catch (error) {
		throw error;
	}
}
