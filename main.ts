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
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );
if(amountAns.amount > myBalance){
    console.log("Insufficient Balance");
}



// =, -=, +=
        myBalance -= amountAns.amount;

        console.log("your remaining balance is: " + myBalance)
       
    } else if(operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance)
    }
}

else {
    console.log("Incorrect pin number");
}
