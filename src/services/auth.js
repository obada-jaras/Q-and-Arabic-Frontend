export function saveAuthToken(token) {
	localStorage.setItem('authToken', token);
}

export function getAuthToken() {
	return localStorage.getItem('authToken');
}
