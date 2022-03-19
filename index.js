// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
//const path = require('path');

function questions() {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "Provide a brief description for this project?",
                name: "description",
            },
            {
                type: "input",
                message: "How do you Install your application?",
                name: "installation",
            },
            {
                type: "input",
                message: "How does one use your application?",
                name: "usage",
            },
            {
                type: "checkbox",
                message: "Choose a license type for this project.",
                choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
                name: "license",
            },
            {
                type: "input",
                message: "How can people Contribute to your project?",
                name: "contributing",
            },
            {
                type: "input",
                message: "How are tests ran?",
                name: "tests"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
        ])
        .then((response) => {
            return fs.writeFile("README.md", generateMarkdown(response), (err) => {
                if(err) {
                    console.log("An error occured at writFile", err);
                    return;
                }
            });
        });
}

questions();