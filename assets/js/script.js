// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function(){
    //Alert the User of the criteria and tell the user what they selected
    window.alert("The following are the criteria of this password generator: lowercase, uppercase, and/or special characters");
    var userInput = window.prompt("Select the criteria to be used (You can select more than one, include spaces when selecting): 1=Lowercase 2=Uppercase 3=Numeric 4=Special Characters ").split(" ");
    var arraySplit = userInput.slice(0, userInput.length);
    window.alert("You have selected " + arraySplit);
    console.log(userInput);

    for(var i = 0; i < userInput.length; i++){
        var inputCriteria = userInput[i];
        var inputCriteriaInteger = parseInt(inputCriteria);

        switch(inputCriteriaInteger){
            case 1:
                console.log("Case 1");
            case 2:
                console.log("Case 2");
            case 3:
                console.log("Case 3");
            case 4:
                console.log("Case 4");
            default:
                if(!inputCriteriaInteger)
                console.log("Please select a criteria using numbers. " + "User Input: " + inputCriteria + "is invalid");
        }
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
