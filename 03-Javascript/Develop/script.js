// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables categorized into 4 groupings
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialChar = " !#$%&';:*+,=-./<>?@()[]^_`{}~| ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Password generatoring
var passCharacters = "";
var userPassword = "";

var passlength = prompt("How many characters would you like in your password? *length must be between 8 and 128 characters");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
