var options = [lowercase, uppercase];

var lowercase = {
    checked: false,
    selector: document.querySelector('#lowercase'),
    values: lowerCasedCharacters
};

var uppercase = {
    checked: false,
    selector: document.querySelector('#uppercase'),
    values: upperCasedCharacters
};

//////////////**start work from here**///////////

// Get references to the #generate element

var lowercaseCheck = document.querySelector('#lowercase');
var uppercaseCheck = document.querySelector('#uppercase');

var checkArray = [
    false, //lowercase
    false //uppercase
]


// Console test to confirm check boxes are getting ticked
lowercaseCheck.addEventListener('click', function() {
    if (lowercaseCheck.checked) {
        console.log("lowercase is true");
        checkArray[0] = true;
    } else {
        checkArray[0] = false;
    }
});

//console test to check generate pass button remembers preference
    // Get references to the #generate element
var generateBtn = document.querySelector('#generate');
    // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
    // Write password to the #password input
function writePassword() {
    console.log(checkArray);
  }


