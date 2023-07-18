import axios from 'axios';
import { getAuthToken } from './auth';
import { BACKEND_API_ROUTES } from '../constants/backendApi';

const sessionService = {
	getSession: async (id) => {
		try {
			const authToken = getAuthToken();

			const response = await axios.get(BACKEND_API_ROUTES.SESSION(id), {
				headers: {
					Authorization: `Token ${authToken}`,
				},
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default sessionService;
