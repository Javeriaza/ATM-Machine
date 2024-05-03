#! usr/bin/env node

import inquirer from "inquirer";


//Initialize user balance and pin code
let myBalance = 10000; //Dollar
let myPin = 2266;


// Print welcome message
console.log("Welcome to Code with Javeria - ATM Machine");

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]
);
// 2266   === 2266 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

 let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices: ["withdraw", "fastcash" ,"check balance"],
            }
        ]
    );
    console.log(operationAns);
   
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount:",
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
       
        
    // =, -=, += :Assignment operators
else {
    let amountLeft = myBalance - amountAns.amount;
    console.log(`The Remaining balance is : ${amountLeft}`);
    console.log("Thank You!");
}
    }
else if(operationAns.operation === "fastcash") {
    let fastcashAmountAns = await inquirer.prompt([
        {
          name: "fastcashAmount",
          type: "list",
          message: "Select one option:",
          choices: ["2000" , "4500" , "8000" , "3600"]      
        }
    ]);
    if(myBalance - fastcashAmountAns.fastcashAmount){
        let leftAmount = myBalance - fastcashAmountAns.fastcashAmount
        console.log(`The remaining balance is ${leftAmount}`)
        console.log("Thank You!");
    }
    else {fastcashAmountAns.fastcashAmount > myBalance
        console.log(`Insufficient Amount!`);
    }
}


else if (operationAns.operation === "check balance") {
    console.log(`Your balance is:   ${myBalance}`);
};
}
else {
    console.log("Incorrect Pin");
};