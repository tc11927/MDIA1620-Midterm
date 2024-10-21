const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

/* notes:
first set up secret, forgot, reset and guess variables
if secret === guess, then the person is correct and "access is granted!""
if secret is not equal to quess (else) than a users "access denied!"
if secret === forgot tells the user "here is a hint"
if secret === reset tells the user "let's reset your account"
Write the question for the password "Welcome back to your computer! Please set your password"
Write question to get the user to type the password "Please enter your password to unlock your computer"
 */

//determine a proper function name and parameter variable name
function Password(paramSecret, paramGuess){

let secret = paramSecret;
let guess = paramGuess;


if (secret === guess){
  console.log("Access is granted!");
}

else if(guess === "forgot"){
  console.log ("Here's a hint!")
}
else if (guess === "reset"){
  console.log ("Let's reset your account")
}

else {
  console.log("Access Denied! :(")
}







  //write your code here
}

//CHALLENGE FUNCTION


/* function StartApp(){
  readline.question('Welcome back to your computer! Please set your password', secret => {
    readline.question('Please enter your password to unlock your computer', guess => {

      //call your function here.

      // readline.close();
      if(guess !== "quit"){
        StartApp();
      } else {
        Password (secret, guess)
        StartApp();
      
      }
    });
  });
}


StartApp(); */


function MakeQuestion (){
  readline.question("Welcome to your new computer! Please set a password!", (_secret) => {
    function StartApp(){

  readline.question("Please enter your password to log in!", (guess) => {

    if (guess === "quit") {
      readline.close();
    }
    
    else {
      Password (_secret,guess)
      StartApp();
    }
  });
}
StartApp();
  } 
)}


MakeQuestion();