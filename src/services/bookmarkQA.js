// bookmarkQA.js
import axios from 'axios';
import { getAuthToken } from './auth';
import { BACKEND_API_ROUTES } from '../constants/backendApi';

export async function bookmarkQA(id) {
	try {
		const authToken = getAuthToken();

		const response = await axios.post(
			BACKEND_API_ROUTES.TOGGLE_BOOKMARK(id),
			{},
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
