// Assignment code here
//Variables that will provide output to user, gather the user input, and turn the application on or off
var arraySplit = "";
var exitApplication = false;
var userInput = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function(){
    //Alert the User of the criteria and tell the user what they selected
    window.alert("The following are the criteria of this password generator: lowercase, uppercase, and/or special characters");
    userInput = window.prompt("Select the criteria to be used (You can select more than one, include spaces when selecting): 1=Lowercase 2=Uppercase 3=Numeric 4=Special Characters ").split(" ");
    
    //SPlit the users input or exit the application
    if (!userInput) {
        exitApplication = window.alert("Restarting the application");
        exitApplicationForm();
    } 
        else {
        userInput = userInput.split(" ");
        arraySplit = userInput.slice(0,userInput.length);
    }

    //Tell the user what they selected
    window.alert("You have selected: " + arraySplit);

    //Loop through the user inputs to dtermine criteria selected
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
            if (!inputCriteriaInteger) {
                window.alert(" Do you wish to exit the application?");
                generatePassword();  
            }
            else { 
                window.alert(" Please select a criteria using numbers. " + "User input: " + inputCriteria + " is invalid");
                generatePassword();  
            }
        }
    }
}

//Calling function to pass length
passLength();

//Function to ask user the length of the password
function passLength(){
    window.alert("How long do you want your password to be from 8-128 characters.\n");
    var pLength = parseInt(window.prompt("Please enter length"));
    if (pLength < 8 || pLength > 128) {
        window.alert("Please enter a valid number between 8-128");
        passLength();
    } else if (!pLength) {
        window.alert("Please enter a valid number between 8-128")
        passLength();
    } else {
        window.alert("You have entered a valid length of: " + pLength + "\n Password will now be generated!");
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

// Verify whether or not we should start the application
function exitApplicationForm () {
    if (exitApplication) {
    } else {
    writePassword();
    }
}
