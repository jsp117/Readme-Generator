const fs = require("fs");
const inquirer = require("inquirer");
const questions = {
question1: "Please enter your Project Title: ",
question2: "Please enter your Project Description: ",
question3: "Please enter your Table of Contents: ",
question4: "Please enter your Installation Guide: ",
question5: "Please enter your Usage Guide: ",
question6: "Please enter your Contributors: ",
question7: "Please enter any tests you ran on your project: ",
question8: "Please enter your Name"
question9: "Please enter your Github Profile Picture Link: ",
question10: "Please enter your Github Email: ",
};
console.log(questions);
inquirer
    .prompt([
        {
            type: "input",
            message: questions.question1,
            name: "project"
        },
        {
            type: "input",
            message: "Please enter your Project Description",
            name: "Location"
        },
        {
            type: "input",
            message: "Please enter your Bio",
            name: "bio"
        },
        {
            type: "input",
            message: "Please enter your Linked URL",
            name: "linked"
        },
        {
            type: "input",
            message: "Please enter your Github Username",
            name: "github"
        },
        {
            type: "input",
            message: "Please enter your Github URL",
            name: "giturl"
        },
    ]);



function writeToFile(fileName, data) {
}

function init() {

}

init();
