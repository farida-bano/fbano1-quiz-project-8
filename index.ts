#! /usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';

const quiz = await inquirer.prompt([
  {
    name: "question1",
    type: "list",
    message: chalk.green("TypeScript is a superset of which programming language?"),
    choices: ["Python", "Java", "JavaScript", "C++"]
  },
  {
    name: "question2",
    type: "list",
    message: chalk.green("Which of the following is a valid TypeScript data type?"),
    choices: ["String", "Number", "Boolean", "All of the above"]
  },
  {
    name: "question3",
    type: "list",
    message: chalk.green("How do you define an interface in TypeScript?"),
    choices: ["class MyInterface{}", "interface MyInterface {}", "struct MyInterface{}", "module MyInterface {}"]
  },
  {
    name: "question4",
    type: "list",
    message: chalk.green("Which keyword is used to declare a variable in TypeScript?"),
    choices: ["var", "let", "const", "all of the above"]
  },
  {
    name: "question5",
    type: "list",
    message: chalk.green("What is the file extension for a TypeScript file?"),
    choices: [".js", ".ts", ".tsx", "both b and c"]
  }
]);

let score = 0;

switch(quiz.question1) {
  case "JavaScript":
    console.log(chalk.bold.green("1. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("1. Incorrect!"));
}

switch(quiz.question2) {
  case "All of the above":
    console.log(chalk.bold.green("2. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("2. Incorrect!"));
}

switch(quiz.question3) {
  case "interface MyInterface {}":
    console.log(chalk.bold.green("3. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("3. Incorrect!"));
}

switch(quiz.question4) {
  case "all of the above":
    console.log(chalk.bold.green("4. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("4. Incorrect!"));
}

switch(quiz.question5) {
  case ".ts":
  case "both b and c":
    console.log(chalk.bold.green("5. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("5. Incorrect!"));
}

console.log(chalk.bold.blue(`Score: ${score}`));
