
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
   passGroup += promptLowerCase();
   console.log(passGroup);
   passGroup += promptUpperCase();
   console.log(passGroup);
   passGroup += promptSpecial();
   console.log(passGroup);

   createPassword();
};

var promptPasswordLength = function() {
   var pl = parseInt(window.prompt("Please enter a password length [8 - 128]."));
   return pl;
};

var promptGoodNumber = function() {
   window.alert("You did not enter a number betweeen 8 and 128!");
};

var promptLowerCase = function() {
   var txt = "";
   var lc = window.confirm("Would you like to include lowercase characters?");
   if (lc) {
      txt += charLower;
   }
   return txt;
};

var promptUpperCase = function() {
   var txt = "";
   var uc = window.confirm("Would you like to include uppercase characters?");
   if (uc) {
      txt += charUpper;
   }
   return txt;
};

var promptSpecial = function() {
   var txt = "";
   var sp = window.confirm("Would you like to include special characters?");
   if (sp) {
      txt += charSpecial;
   }
   return txt;
};

var createPassword = function() {
   for (i = 0; i < passwordLength; i++) {
      userPassword += passGroup.charAt(Math.floor(Math.random() * passGroup.length));
      console.log(userPassword);
   }
};

generatePassword();