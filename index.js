// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeToFile } = require("./utils/generateMarkdown");
const generatePage = require("./src/readme-template.js");


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your project's title.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmTable",
        message:
          'Would you like to have a Table of Contents?',
        default: true,
      },
      {
        type: "checkbox",
        name: "ToC",
        message: "Provide content Headers:",
        choices: [
            "Installation",
            "Usage",
            "Credits",
            "License",
          ],
        when: ({ confirmTable }) => {
          if (confirmTable) {
            return true;
          } else {
            return false;
          }
        },
      },
    ]);
  };

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
  .then(readmeData => {
      return generatePage(readmeData);
  })
