const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//determine a proper function name and parameter variable name

/* notes
if score > 86 "Excellent! [Student Name] has an A."
if score >=75 && score <= 85 "Great job! [Student Name] has a B."
if score >=60 && score <= 72 "Good effort! [Student Name] has a C."
if score >=50 && score <=60 "Needs improvement. [Student Name] has a D."
if score < 50 "Fail. [Student Name] has a F."
First Student name variable
Then student score variable!
Question 1: Please input your name for exam results!
Question 2: Please input your grade to determine your letter grade!
*/
function GradeChecker(paramName, paramResult){
  let name = paramName;
  let result = paramResult;

  if(result < 50){
    console.log ("Fail. "+name+" has an F.");
  }

  else if(result >=50 && result <=60){
  console.log("Need improvement. "+name+" has a D.");
}

  else if (result >=60 && result<= 72) {
    console.log ("Good effort! "+name+" has a C.");
  }

  else if(result >=72 && result <= 85){
    console.log ("Great job! "+name+" has a B.");
  }

  else if (result >= 86){
    console.log ("Excellent! "+name+" has an A.");
  }

  
  

  //write your code here
}

/*
function MakeQuestion(){
  readline.question('Please input your name for exam results!', name => {

    function StartApp (){

    readline.question("Please input your grade to determine your letter grade!", result => {
      GradeChecker(Number(result), name);

      //call your function here.

      // readline.close();
      if(result !== "quit"){
        StartApp();
      } else {
         GradeChecker (name,result)
          StartApp();
      }
    });
    StartApp();
  } 
  });
}

MakeQuestion(); */


function MakeQuestion (){
  readline.question('Please input your name for exam results!', name => {
    function StartApp (){

    readline.question("Please input your grade to determine your letter grade!", result => {
        GradeChecker(Number(result), name);
      
      if (result === "quit"){
        readline.close();
      }
      else {
        GradeChecker (name, result)
        StartApp ();
      }
    });
    }
    StartApp();
})
  }

  MakeQuestion();