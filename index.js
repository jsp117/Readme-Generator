const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const write = util.promisify(fs.writeFile);

const questions = {
    question1: "Please enter your Github username",
    question2: "Please enter your Project Title: ",
    question3: "Please enter your Project Description: ",
    question4: "Would you like an Installation Guide?",
    question5: "Please enter your Installation Guide: ",
    question6: "Please enter your Usage Guide: ",
    question7: "Please select a license",
    question8: "Please enter your Contributors: ",
    question9: "Please enter your Name",
    question10: "Please enter any tests you ran on your project: ",
    question11: "Please enter your Email Address: ",
};

// add object constructor to allow user to choose what they want in readme

// console.log(questions);

// starts program , gets userinfo, generates markdown, then writes to file
async function init() {
    try {
        const info = await userInfo();
        console.log(info);
        const readMe = await generateMarkdown(info);
        write("README.md", readMe);
        console.log("done");
    }
    catch (e) {
        console.log("Error: ", e);
    }
}

function userInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: questions.question1,
            name: "username"
        },
        {
            type: "input",
            message: questions.question2,
            name: "projectName"
        },
        {
            type: "input",
            message: questions.question3,
            name: "desc"
        },
        {
            type: "input",
            message: questions.question4,
            name: "confirmInstall"
        },
        // 
        // {
        //     when: function (data) {
        //         if(data.confirmInstall){

        //         }
        //     }
        // },
        {
            type: "input",
            message: questions.question5,
            name: "install"
        },
        {
            type: "input",
            message: questions.question6,
            name: "usage"
        },
        {
            type: "checkbox",
            message: questions.question7,
            name: "license",
            choices: ["MIT", "Apache 2.0", "GNU General Public 3.0", "ISC"]
        },
        {
            type: "input",
            message: questions.question8,
            name: "contributors"
        },
        {
            type: "input",
            message: questions.question9,
            name: "name"
        },
        {
            type: "input",
            message: questions.question10,
            name: "tests"
        },
        {
            type: "input",
            message: questions.question11,
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
