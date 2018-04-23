var dom = {};

function one(selector) {
	return document.querySelector(selector);
}

function all(selector) {
	return Array.from(document.querySelectorAll(selector));
}