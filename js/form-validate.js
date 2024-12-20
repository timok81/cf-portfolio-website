let form = document.querySelector('#contact-form');
let emailInput = document.querySelector('#email');
let msgInput = document.querySelector('#message');

function validateEmail() {
    let value = emailInput.value;
    let hasAtSign = value.indexOf('@') > -1;
    let hasDot = value.indexOf('.') > -1;

    if (!value) {
        showErrorMessage(emailInput, 'E-mail is a required field');
        return false;
    }

    if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid e-mail address');
        return false;
    }

    if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid e-mail address');
        return false;
    }

    showErrorMessage(emailInput, null);
    return value && hasAtSign && hasDot;
}

function showErrorMessage(input, message) {
    let container = input.parentElement;
    
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }

    if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
    }
}

function validateForm() {
    let isValidEmail = validateEmail();
    return isValidEmail;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Success!');
    }
})

emailInput.addEventListener('input', validateEmail);