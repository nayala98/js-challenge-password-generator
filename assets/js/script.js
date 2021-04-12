// Assignment code here
//Variables that will provide output to user, gather the user input, and turn the application on or off
var arraySplit = "";
var exitApplication = false;
var userInput = "";
var finalPassword = "";

//Criterias for the password
var pCriteria = {
    lowercase: { indexNumber: 1, criteria: "abcdefghijklmnopqrstuvwxyz"},
    uppercase: { indexNumber: 2, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    numeric: { indexNumber: 3, criteria: "0123456789"},
    symbols: { indexNumber: 4, criteria: " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Call the function to generate the password
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
            case 2:
            case 3:
            case 4:
                break;
            default:
            if (!inputCriteriaInteger) {
                window.alert("Please select a criteria using numbers and only from 1-4 seprated by space.\n Restarting application");
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
var pLength = passLength();

generatePasswordRandomness(userInput,pLength);

function generatePasswordRandomness(userInput, pLength){
    var valueRandom = 0;
}

//Counters
var counter = 1;
var UserCounter = 0;
var finalPassword = "";

while ( counter <= pLenght )  {
    counter += 1;


if (!userInput[UserCounter]) {
    UserCounter -= Math.floor( ( (Math.random() * userInput.length) + 1) );


var inputCriteria = userInput[UserCounter];// Convert this output into integer for further validation
var inputCriteriaInteger = parseInt(inputCriteria);
switch(inputCriteriaInteger) {
    case 1:
        valueRandom = Math.floor(Math.random() * 26);
        finalPassword += pCriteria.lowercase.criteria[valueRandom];
        UserCounter += 1;
        console.log(finalPassword);
        break;
    case 2:
        valueRandom = Math.floor(Math.random() * 26);
        finalPassword += pCriteria.uppercase.criteria[valueRandom];
        UserCounter += 1;
        break;
    case 3:
        valueRandom = Math.floor(Math.random() * 10);
        finalPassword += pCriteria.numeric.criteria[valueRandom];
        UserCounter += 1;
        break;
    case 4:
        valueRandom = Math.floor(Math.random() * 31);
        finalPassword += pCriteria.symbols.criteria[valueRandom];
        UserCounter += 1;
        break;
        }
    }
    console.log("Final password is: " + finalPassword);
}

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
        return pLength;
    }
    }

// Write password to the #password input
function writePassword() {
    window.alert(" Lets check our password criteria options");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    //passwordText.value = password;
    document.getElementById("password").readOnly = false;
    document.getElementById("password").value = arraySplit;
    document.getElementById("password").readOnly = true;


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
