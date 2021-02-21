const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const genReadMe = "genREADME.md"

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the project's Title?",
    },
    {
        type: "input",
        name: "Description",
        message: "What is the project's description?",
    },
    {
        type: "input",
        name: "ProjectLink",
        message: "What is the project's Livelink?",
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter the project's installation instructions:",
    },
    {
        type: "input",
        name: "Guide",
        message: "Enter the project's intended use information:",
    },
    {
        type: "input",
        name: "Testing",
        message: "Enter any project testing information:",
    },
    {
        type: "input",
        name: "License",
        message: "Enter license information (For help choosing a license, visit https://choosealicense.com/): ",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        const information = genMarkdown(data);
        writeToFile(genReadMe, information);
  }).catch(error => {
    if(error.isTtyError) {
      console.log("Error! Code could not be read")
    } else {
      console.log("Success!")
    }
  });
}

// function call to initialize program
init();
