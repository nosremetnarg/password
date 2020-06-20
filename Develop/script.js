
// 
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumberCharacter;
var confirmUpperCase;
var confirmLowerCase;

//
function generatePassword() {
  var confirmLength = window.prompt("How many characters would you like your password to contain?");

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = window.prompt("How many characters would you like your password to contain?")
  }

  alert("Your password will be " + confirmLength + " characters");

  // Get parameters from user
   var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
   var confirmNumberCharacter = confirm("Click OK to confirm if you would like to include number characters");
   var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
   var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    // Loop if answer is outside parameters
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumberCharacter === false) {
      alert("You must pick one option");
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumberCharacter = confirm("Click OK to confirm if you would like to include number characters");
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
    }

    // 
    var passwordCharacters = [];
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumberCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(letterLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(letterUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// var promptPassword = window.prompt("Would you like to generate a password?");
// promptPassword = promptPassword.toLowerCase();
// if (promptPassword === "yes" || promptPassword === "YES") {
//   window.alert("lets make a super dope password");
// }
// if (promptPassword === "no" || promptPassword === "NO") {
//   window.alert("Have a nice day");
// }
// var passwordLength = window.prompt("How long would you like your password to be? Pick a number between 8 and 128");

// while(cLength <= 7 || confirmLength >= 51) {
//   alert("Password length must be between 8-50 characters Try again");
//   var confirmLength = (prompt("How many characters would you like your password to contain?"));
//   } 

// // Assignment code here
// const characterAmountRange = document.getElementById('characterAmountRange')
// const characterAmountNumber = document.getElementById('characterAmountNumber')
// const includeUppercaseElement = document.getElementById('includeUppercase')
// const includeNumbersElement = document.getElementById('includeNumbers')
// const includeSymbolsElement = document.getElementById('includeSymbols')
// const form = document.getElementById('passwordGeneratorForm')
// const passwordDisplay = document.getElementById('passwordDisplay')

// const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
// const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
//   arrayFromLowToHigh(58, 64)
//   ).concat(
//     arrayFromLowToHigh(91, 96)
//   ).concat(
//     arrayFromLowToHigh(123, 126)
//   )


// characterAmountNumber.addEventListener('input', syncCharacterAmount)
// characterAmountRange.addEventListener('input', syncCharacterAmount)

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const characterAmount = characterAmountNumber.value
//   const includeUppercase = includeUppercaseElement.checked
//   const includeNumbers = includeNumbersElement.checked
//   const includeSymbols = includeSymbolsElement.checked
//   const password = generatePassword(characterAmount, includeUppercase, 
// includeNumbers, includeSymbols)
//   passwordDisplay.innerText = password
// })

// function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
//   let charCodes = LOWERCASE_CHAR_CODES
//   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
//   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
//   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
//   const passwordCharacters = []
//   for (let i = 0; i < characterAmount; i++) {
//     const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
//     passwordCharacters.push(String.fromCharCode(characterCode))
//   }
//   return passwordCharacters.join('')
// }

// function arrayFromLowToHigh(low, high) {
//   const array = []
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }

// function syncCharacterAmount(e) {
//   const value = e.target.value
//   characterAmountNumber.value = value
//   characterAmountRange.value = value
// }


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", function(){
//   alert("Lets Create a password");
// });
