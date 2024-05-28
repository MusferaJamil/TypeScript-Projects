import inquirer from "inquirer";

const answer = await inquirer.prompt({
  name: "num1",
  type: "number",
  message: "Enter Your First Number",
});

const answer2 = await inquirer.prompt({
  name: "num2",
  type: "number",
  message: "Enter Your Second Number",
});
let operator = await inquirer.prompt({
  name: "operator",
  type: "list",
  message: "Select one of the operator",
  choices: ["addition", "subtraction", "multiplication", "division", "modulus"],
});


if (operator.operator == "addition"){
    console.log(answer.num1 + answer2.num2)
}
else if (operator.operator == "subtraction"){
    console.log(answer.num1 - answer2.num2)
}
else if (operator.operator == "multiplication"){
    console.log(answer.num1 * answer2.num2)
}
else if (operator.operator == "divition"){
    console.log(answer.num1 / answer2.num2)
}

else if (operator.operator == "modulus"){
    console.log(answer.num1 % answer2.num2)
}

else {
    console.log("Error")
}


