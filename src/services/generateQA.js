import axios from 'axios';
import { BACKEND_API_ROUTES } from '../constants/backendApi';
import { getAuthToken } from './auth';

export async function generateQA(context, QGModel, QAModel, numQuestions) {
	try {
		const authToken = getAuthToken();

		const response = await axios.post(
			BACKEND_API_ROUTES.GENERATE_QA,
			{
				text: context,
				ai_model: `${QGModel},${QAModel}`,
				num_of_questions: numQuestions,
				title: getFirst10Words(context, 5),
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

function getFirst10Words(text, numberOfWords) {
	const words = text.split(' ');
	const firstNWords = words.slice(0, numberOfWords);
	return firstNWords.join(' ');
}
