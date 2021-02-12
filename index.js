const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const genReadMe = "genREADME.md"

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Enter the project's title:",
    },
    {
        type: "input",
        name: "ProjectLink",
        message: "Enter the deployed project link:",
    },
    {
        type: "input",
        name: "Description",
        message: "Enter the project's description:",
    },
    {
        type: "input",
        name: "Demo",
        message: "Provide Demo information (screenshots/gifs/videos will need to be inserted into the README.md manually):",
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter the project's installation instructions:",
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter the project's intended use information:",
    },
    {
        type: "input",
        name: "License",
        message: "Enter license information (For help choosing a license, visit https://choosealicense.com/): ",
    },
    {
        type: "input",
        name: "Contributing",
        message: "Describe how someone may contribute (if available):",
    },
    {
        type: "input",
        name: "Testing",
        message: "Enter any project testing information:",
    },
    {
        type: "input",
        name: "DeveloperInfo1",
        message: "Enter in your full name:",
    },
    {
        type: "input",
        name: "DeveloperInfo2",
        message: "Enter in your gitHub profile username:",
    },
    {
        type: "input",
        name: "DeveloperInfo3",
        message: "Enter in your email address:",
    },
    {
        type: "input",
        name: "Credientials",
        message: "List any information sources you would like to credit:",
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
