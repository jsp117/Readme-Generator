const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const { userInfo } = require("os");

const questions = {
    question1: "Please enter your Project Title: ",
    question2: "Please enter your Project Description: ",
    question3: "Please enter your Table of Contents: ",
    question4: "Please enter your Installation Guide: ",
    question5: "Please enter your Usage Guide: ",
    question6: "Please enter your Contributors: ",
    question7: "Please enter your Name",
    question8: "Please enter any tests you ran on your project: ",
    question9: "Please enter your Github Profile Picture Link: ",
    question10: "Please enter your Github Email: ",
};

// after finished testing - ask for github username and pull all repos - select repo you would like to generate readme for and include that info
// console.log(questions);

// writes data to readme file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//     });
// }

// prompts user for info - passes to writefile
async function init() {
    try {
        const info = await userInfo();
        console.log(info);
        const readMe = generateMarkdown(info);
        await writeFileAsync("README.md", readMe);
        console.log("done");
    }
    catch(e){
        console.log("Error: ", e);
    }   
}

function userInfo() {
    return inquirer.prompt([
            {
                type: "input",
                message: questions.question1,
                name: "projectName"
            },
            {
                type: "input",
                message: questions.question2,
                name: "desc"
            },
            {
                type: "input",
                message: questions.question3,
                name: "toc"
            },
            {
                type: "input",
                message: questions.question4,
                name: "install"
            },
            {
                type: "input",
                message: questions.question5,
                name: "usage"
            },
            {
                type: "input",
                message: questions.question6,
                name: "contributors"
            },
            {
                type: "input",
                message: questions.question7,
                name: "name"
            },
            {
                type: "input",
                message: questions.question8,
                name: "tests"
            },
            {
                type: "input",
                message: questions.question9,
                name: "pro"
            },
            {
                type: "input",
                message: questions.question10,
                name: "email"
            },
        ]);
        // .then(function (data) {
        //     console.log(data);
        //     let create = generateMarkdown(data);
        //     writeToFile("README.md", create);

        // });
}

init();
