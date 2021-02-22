const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const genReadMe = "genREADME.md"

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the project's title?",
    },
    {
        type: "input",
        name: "Description",
        message: "What is the project's description?",
    },
    {
        type: "input",
        name: "ProjectLink",
        message: "What is the project's livelink?",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the project's installation instructions?",
    },
    {
        type: "input",
        name: "Guide",
        message: "Please provide proper instructions for using the application:",
    },
    {
        type: "input",
        name: "Testing",
        message: "What are the project's testing instructions?",
    },
    {
        type: "input",
        name: "License",
        message: "What license is this project under? (For help choosing a license, visit https://choosealicense.com/): ",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Success! genREADME.md created. Don't forget to erase unused sections and the corresponding table of contents components! Also, make sure to fill out your credentials and add any necessary media!")
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
