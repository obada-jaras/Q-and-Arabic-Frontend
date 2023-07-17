const BACKEND_API = 'http://localhost:8000';

export const BACKEND_API_ROUTES = {
	REGISTER: `${BACKEND_API}/register`,
	LOGIN: `${BACKEND_API}/login`,
	LOGOUT: `${BACKEND_API}/logout`,
	HISTORY: `${BACKEND_API}/queries`,
	SESSION: (id) => `${BACKEND_API}/queries/${id}`,
	TOGGLE_BOOKMARK: (id) => `${BACKEND_API}/queries/${id}/bookmark`,
	BOOKMARKED_SESSIONS: `${BACKEND_API}/bookmarked`,
};
