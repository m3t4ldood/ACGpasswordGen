// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var resultEl = document.querySelector('#password');
var generate = document.querySelector('#generate');
var copyClip = document.querySelector('#copyClip');
var lengthEl = document.querySelector('#passl');
var lowercaseEl = document.querySelector('#lowercase');
var uppercaseEl = document.querySelector('#uppercase');
var numbersEl = document.querySelector('#number');
var symbolsEl = document.querySelector('#symbol')


var randomChoice = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generate.addEventListener('click', function motion() {

    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;

    if (length < 8) {

        alert("Your password must be between 8 and 128 characters")
    }else if(length > 128) {
        
        alert("Your password must be between 8 and 128 characters")
        
    }
    
    else {

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    }
    
});

copyClip.addEventListener('click', function copyUp() {
    var textArea = document.createElement('textarea');
    var plassword = resultEl.innerText;

    if (!plassword) {
        return;
    }

    textArea.value = plassword;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied to clipboard!');

})

function generatePassword(lower, upper, number, symbol, length) {

    var generatedResult = '';

    var typesCount = lower + upper + number + symbol;

    var typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
        item => Object.values(item)[0]
    );


    if (typesCount === 0) {
        return '';
    }

    for (var i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

            generatedResult += randomChoice[funcName]();
        })

        var finalPassword = generatedResult.slice(0, length);

        
        console.log(finalPassword);
    }
    return finalPassword;
}


function getRandomLower() {

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomUpper() {

    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];

}

function getRandomNumber() {

    var numbers = "1234567890";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {

    var symbols = "!@#$%^&*()_+";
    return symbols[Math.floor(Math.random() * symbols.length)];

}

