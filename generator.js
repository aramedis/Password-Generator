/* * Generate a password when the button is clicked */
var generatePassword = document.createElement('button');
generatePassword.innerHTML = 'Generate Password';
document.body.appendChild(generatePassword);

/* * Length of password */
var passwordLength = document.createElement('div');
passwordLength.innerHTML = 'Password Length';
document.body.appendChild(passwordLength);

/* * At least 10 characters but no more than 64. */
var passwordLengthInput = document.createElement('input');
passwordLengthInput.setAttribute('type', 'number');
passwordLengthInput.setAttribute('min', '10');
passwordLengthInput.setAttribute('max', '64');
passwordLengthInput.setAttribute('value', '10');
passwordLength.appendChild(passwordLengthInput);

/* * Character types */
var characterTypes = document.createElement('div');
characterTypes.innerHTML = 'Character Types';
document.body.appendChild(characterTypes);

/* * Lowercase */
var lowercase = document.createElement('div');
lowercase.innerHTML = 'Lowercase';
document.body.appendChild(lowercase);

/* * Uppercase */
var uppercase = document.createElement('div');
uppercase.innerHTML = 'Uppercase';
document.body.appendChild(uppercase);

/* * Numeric */
var numeric = document.createElement('div');
numeric.innerHTML = 'Numeric';
document.body.appendChild(numeric);

/* * Special characters ($@%&*, etc) */
var specialCharacters = document.createElement('div');
specialCharacters.innerHTML = 'Special Characters';
document.body.appendChild(specialCharacters);

/* * Code should validate for each input and at least one character type should be selected */
var lowercaseInput = document.createElement('input');
lowercaseInput.setAttribute('type', 'checkbox');
lowercase.appendChild(lowercaseInput);
var uppercaseInput = document.createElement('input');
uppercaseInput.setAttribute('type', 'checkbox');
uppercase.appendChild(uppercaseInput);
var numericInput = document.createElement('input');
numericInput.setAttribute('type', 'checkbox');
numeric.appendChild(numericInput);
var specialCharactersInput = document.createElement('input');
specialCharactersInput.setAttribute('type', 'checkbox');
specialCharacters.appendChild(specialCharactersInput);

/* * Once prompts are answered then the password should be generated and displayed in an alert or written to the page */
var password = document.createElement('div');
password.innerHTML = 'Password';
document.body.appendChild(password);
var passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'text');
password.appendChild(passwordInput);



// Get references to the #generate element
var lowercaseCheck = document.querySelector('#lowercase');


// Console test to confirm check boxes are getting ticked
lowercaseCheck.addEventListener('click', function() {
    if (lowercaseCheck.checked) {
        console.log("lowercase is true");
    } else {
            console.log("lowercase is false");
        }
});



