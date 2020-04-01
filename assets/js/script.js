
// initialize variables
var passwordLength = 0;
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "!#$%&'()*+,-./:;?@][^_{|}~'<=>";
var passGroup = "";
var userPassword = "";




var generatePassword = function() {
   passwordLength = promptPasswordLength();
   
   // if the length is not a number, let the user know and reprompt
   while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
      promptGoodNumber();
      passwordLength = promptPasswordLength();
   }

   console.log(passwordLength);

   // prompt for lower case characters

   
};

var promptPasswordLength = function() {
   var pl = parseInt(window.prompt("Please enter a password length [8 - 128]."));
   return pl;
}

var promptGoodNumber = function() {
   window.alert("You did not enter a number betweeen 8 and 128!");
}


generatePassword();