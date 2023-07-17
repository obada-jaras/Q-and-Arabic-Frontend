import axios from 'axios';
import { BACKEND_API_ROUTES } from '../constants/backendApi';
import { getAuthToken } from './auth';

export async function generateQA(
	context,
	QGModel,
	QAModel,
	numQuestions,
	title,
) {
	try {
		const authToken = getAuthToken();

		const response = await axios.post(
			BACKEND_API_ROUTES.GENERATE_QA,
			{
				text: context,
				ai_model: `${QGModel},${QAModel}`,
				num_of_questions: numQuestions,
				title: title,
			},
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
