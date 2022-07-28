// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var passLength = prompt("Choose character length between 8 and 128");
  if (passLength <= 7 || passLength >= 129) {
    alert("Invalid Length");
    return;
  }
  var passLower = confirm("Do you want lowercase characters?");
  var passUpper = confirm("Do you want uppercase characters?");
  var passSpecial = confirm("Do you want special characters?");
  var passNumerics = confirm("Do you want numeric characters?")
  if (!passLower && !passUpper && !passSpecial && !passNumerics) {
    alert("Needs at least 1 criteria");
    return;
  }
  var passUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var passLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var passSpecialArray = ["!", "@", "#", "$", "%", "&", "^", "*", "(", ")", "_", "-", ",", ".", "<", ">", ";", "[", "]"];
  var passNumericsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var possibleCharacters = [];
  var chosenPassword = [];
  if (passLower) {
    possibleCharacters = possibleCharacters.concat(passLowerArray);
  }
  if (passUpper) {
    possibleCharacters = possibleCharacters.concat(passUpperArray);
  }
  if (passSpecial) {
    possibleCharacters = possibleCharacters.concat(passSpecialArray);
  }
  if (passNumerics) {
    possibleCharacters = possibleCharacters.concat(passNumericsArray);
  }
  for (var i = 0; i <= passLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var randomChar = possibleCharacters[randomIndex];
    chosenPassword.push(randomChar)
  }

  return chosenPassword.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// first alert : ask how long user wants the password : prompt
// second alert: include lowercase? confirm
//  third: include Uppercase? confrim
//  fourth: include numeric? confirm
// fifth: include special characters? confirm
