let enter;
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;

// Arrays for character types
const character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const space = [];

// Function to convert letters to uppercase
const toUpper = function (x) {
    return x.toUpperCase();
};

const alpha2 = alpha.map(toUpper);

const get = document.querySelector("#generate");

get.addEventListener("click", function () {
    const password = generatePassword();
    document.getElementById("password").placeholder = password;
});

function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain uppercase letters?");
        confirmLowercase = confirm("Will this contain lowercase letters?");
    }

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        alert("You must choose a criteria!");
    } else {
        let choices = [];

        if (confirmCharacter) {
            choices = choices.concat(character);
        }

        if (confirmNumber) {
            choices = choices.concat(number);
        }

        if (confirmLowercase) {
            choices = choices.concat(alpha);
        }

        if (confirmUppercase) {
            choices = choices.concat(alpha2);
        }

        const password = [];

        for (let i = 0; i < enter; i++) {
            const pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
        }

        const generatedPassword = password.join("");
        UserInput(generatedPassword);
        return generatedPassword;
    }
}

function UserInput(password) {
    document.getElementById("password").textContent = password;
}

const copy = document.querySelector("#copy");

copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
