const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

/* Notes
If lunchcost =< lunchmoney "[student name] purchased [lunch item] purchased!"
If lunchcost >= lunchmoney "[student name] does not have sufficient funds to buy [lunch item]!"
make variables: lunchcost, lunchmoney, item, name
make questions: what is your name, how much money do you have, what would you like to purchase, and how much does it cost?

*/

//determine a proper function name and parameter variable name
function Lunch(paramlunchmoney, paramlunchcost,paramname, paramitem){

  let money = paramlunchmoney;
  let cost = paramlunchcost;
  let name = paramname;
  let item = paramitem;

  if (cost >= money){
    console.log (""+name+" does not have sufficient funds to buy "+item+"");
  }

  if (cost <= money){
    console.log(""+name+" purchased "+item+"!");
  }




  //write your code here
}

function StartApp(){
  readline.question('What is your name?', name => {
    readline.question('How much lunch money do you have?', money => {
      readline.question('What item would you like to buy for lunch?', item => {
        readline.question('How much does it cost?', cost => {

          //call your function here.
          Lunch(Number(money), Number(cost), name, item);
          // readline.close();
          if(name, money, cost, item !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();