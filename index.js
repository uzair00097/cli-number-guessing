#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.green("Please guess a number between 1-6")
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Congratulations! you guessed right!"));
}
else {
    console.log(chalk.red("You guessed wrong!"));
}
