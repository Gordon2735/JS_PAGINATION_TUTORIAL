'use strict';

import paginatorState from './currentStep.js';

// Setting an initial step
let thisCurrentStep = Number();
let thisCurrentStep2 = 0;

const newState = paginatorState(thisCurrentStep2);
console.log(newState);

// Selecting DOM elements
const startBtn = document.querySelector('#startBtn'),
	endBtn = document.querySelector('#endBtn'),
	prevNext = document.querySelectorAll('.prevNext'),
	numbers = document.querySelectorAll('.link');

// Function to update the button states
let currentStep = newState;

export default function updateBtn() {
	// If we are at the last step
	if (currentStep === 4) {
		endBtn.disabled = true;
		prevNext[1].disabled = true;
	} else if (currentStep === 0) {
		// If we are at the first step
		startBtn.disabled = true;
		prevNext[0].disabled = true;
	} else if (currentStep === 1 || currentStep === 2 || currentStep === 3) {
		endBtn.disabled = false;
		prevNext[1].disabled = false;
		startBtn.disabled = false;
		prevNext[0].disabled = false;
	}
}

// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
	number.addEventListener('click', e => {
		e.preventDefault();
		currentStep = numIndex;
		// Remove the "active" class from the previously active number link
		document.querySelector('.active').classList.remove('active');
		// Add the "active" class to the clicked number link
		number.classList.add('active');
		window.location = number.href;
		updateBtn(); // Update the button states
	});
});

// Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach(button => {
	button.addEventListener('click', e => {
		// Increment or decrement the current step based on the button clicked
		currentStep += e.target.id === 'next' ? 1 : -1;
		numbers.forEach((number, numIndex) => {
			// Toggle the "active" class on the number links based on the current step
			number.classList.toggle('active', numIndex === currentStep);
			updateBtn(); // Update the button states
			window.location = number.href;
		});
	});
});

// Add event listener to the "Start" button
startBtn.addEventListener('click', () => {
	// Remove the "active" class from the previously active number link
	document.querySelector('.active').classList.remove('active');
	// Add the "active" class to the first number link
	numbers[0].classList.add('active');
	currentStep = 0;
	window.location = numbers[0].href;
	updateBtn(); // Update the button states
	endBtn.disabled = false;
	prevNext[1].disabled = false;
});

// Add event listener to the "End" button
endBtn.addEventListener('click', () => {
	// Remove the "active" class from the previously active number link
	document.querySelector('.active').classList.remove('active');
	// Add the "active" class to the last number link
	numbers[4].classList.add('active');
	let currentStep = 4;
	window.location = numbers[4].href;
	updateBtn(); // Update the button states
	startBtn.disabled = false;
	prevNext[0].disabled = false;
});
