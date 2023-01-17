//Define password options as objects

var special = {
    name: "special",
    check: false,
    selector: document.querySelector('#special'),
    values: specialCharacters
};

var numeric = {
    name: "numeric",
    check: false,
    selector: document.querySelector('#numeric'),
    values: numericCharacters
};

var lowercase = {
    name: "lowercase",
    check: false,
    selector: document.querySelector('#lowercase'),
    values: lowerCasedCharacters
};

var uppercase = {
    name: "uppercase",
    check: false,
    selector: document.querySelector('#uppercase'),
    values: upperCasedCharacters
};

var passwordLength ={
    selector: document.querySelector('#length'),
    number: 10
}
//////////////**start work from here**///////////

var options = [special, numeric, lowercase, uppercase];

// Console test to confirm check boxes are getting ticked, I also learnt the hard way that you shouldn't addEventListener to a For loop
//Event Listeners for all options
lowercase.selector.addEventListener('click', function() {
    if (lowercase.selector.checked) {
        console.log("lowercase is true");
        lowercase.check = true;
    } else {
        lowercase.check = false;
        console.log("lowercase is false");
    }
});

numeric.selector.addEventListener('click', function() {
    if (numeric.selector.checked) {
        console.log("numeric is true");
        numeric.check = true;
    } else {
        numeric.check = false;
        console.log("numeric is false");
    }
});

uppercase.selector.addEventListener('click', function() {
    if (uppercase.selector.checked) {
        console.log("uppercase is true");
        uppercase.check = true;
    } else {
        uppercase.check = false;
        console.log("uppercase is false");
    }
});

special.selector.addEventListener('click', function() {
    if (special.selector.checked) {
        console.log("special is true");
        special.check = true;
    } else {
        special.check = false;
        console.log("special is false");
    }
});

//console test to check generate pass button remembers preference
    // Get references to the #generate element
var generateBtn = document.querySelector('#generate');
    // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
    // Write password to the #password input
function writePassword() {
    console.log(masterPass);
  }

masterArray = [];
masterPass = [];
// masterPassString = masterPass.join("");
//the above didn't work for some reason

//concatenate arrays
function concatArrays() {
    for (var i = 0; i < options.length; i++) {
        if (options[i].check === true) {
            masterArray.push(options[i].values)
        }
    }
    return;
}

//Choose random element from the above concatenated random array
function randomElement() {
    for (var i = 0; i < passwordLength.number; i++) {
        arrayLayer1 = masterArray[Math.floor(Math.random() * masterArray.length)];
        // console.log(arrayLayer1);
        arrayLayer2 = arrayLayer1[Math.floor(Math.random() * arrayLayer1.length)]
        // console.log(arrayLayer2);
        masterPass.push(arrayLayer2);
        // console.log(masterPass);
    }
}

//master function
function writePassword() {
    concatArrays();
    randomElement();
    // console.log(masterPass.join(""))
    var passwordText = document.querySelector('#password');
    
    passwordText.value = masterPass.join("");
    return;
}

