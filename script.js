// Assignment Code



var number =[0,1,2,3,4,5,6,7,8,9,]
var specialCharacter = ["!","@","#","$","%","&","*"]
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase =["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
var passwordLength = 0

var generateBtn = document.querySelector("#generate");

// Write password to the #password input


generateBtn.addEventListener("click", function() {
  cycle();
  passwordLength = prompt ("Choose a length between 8 and 128 characters");
  if (parseInt (passwordLength) < 8 || parseInt (passwordLength) > 128 { 
    alert ( "Doesn't meet lenght requirements");
  
    

  }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
