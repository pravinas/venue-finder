document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
	dom.loginButton = one("#login-signup-button");
	dom.usernameInput = one("#username");
	dom.passwordInput = one("#password");
	dom.usernameInput.onchange = validateLoginButton;
	dom.passwordInput.onchange = validateLoginButton;
	dom.usernameInput.oninput = validateLoginButton;
	dom.passwordInput.oninput = validateLoginButton;
	validateLoginButton();
}

function isEmpty(str) {
	return (str.length === 0 || !str.trim());
}

function validateLoginButton() {
	var validLogin = !isEmpty(dom.usernameInput.value) && !isEmpty(dom.passwordInput.value);
	dom.loginButton.disabled = !validLogin;
}