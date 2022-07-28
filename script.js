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
  if (!passLower && !passUpper && !passSpecial) {
    alert("Needs at least 1 criteria");
    return;
  }
  var passUpperArray = ["A", "B", "C", "D"];
  var passLowerArray = ["a", "b", "c", "d"];
  var passSpecialArray = ["!", "@", "#", "$"];
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
