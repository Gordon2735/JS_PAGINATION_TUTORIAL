'use strict';

// Initialize the State of the State
function paginatorState(persistedState) {
	const currentURL = window.location.href;
	let currentState = Number();

	switch (currentURL) {
		case 'http://127.0.0.1:8080/views/index.html':
			currentState = 0;
			break;
		case 'http://127.0.0.1:8080/views/02.html':
			currentState = 1;
			break;
		case 'http://127.0.0.1:8080/views/03.html':
			currentState = 2;
			break;
		case 'http://127.0.0.1:8080/views/04.html':
			currentState = 3;
			break;
		case 'http://127.0.0.1:8080/views/05.html':
			currentState = 4;
			break;
		default:
			currentState = 0;
			break;
	}

	function updateState() {
		persistedState = currentState;
		console.log(persistedState);

		return persistedState;
	}
	return updateState();
}

export default paginatorState;
