// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "What is the author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address"
        },
        {
            type: "input",
            name: "title",
            message: "What is the project's title?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description for the project."
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license type for this project",
            choices: ["None", "ARTISTIC-2.0", "MIT", "BSD-3.0", "AFL-3.0", "APACHE-2.0", "GPL-3.0", "CC"]
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running - dependencies."
        },
        {
            type: "input",
            name: "tests",
            message: "How are tests ran?"
        },
        {
            type: "input",
            name: "repo",
            message: "What does the user need to know about using the repo"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo"
        },
    ]);


function generateMD(data){
    return `
    # ${data.title}
    ### ${data.description}
    ## Table of Contents:
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ### Installation:
    In order to install the necessary dependencies, open the console and run the following:
    --${data.installation}--
    ### License:
    This project is licensed under:
    ${data.license}
    ### Contributing:
    ${data.contribute}
    ### Tests:
    To test, open the console and run the following:
    ${data.tests}
    ### Questions:
    If you have questions, contact me on [GitHub](https://github.com/${data.username}) or constact
    ${data.author} at ${data.email}
    `
}

questions()
    .then((data) => writeFileAsync('README.md',
    generateMD(data)))
    .then(() => console.log("You have completed the README.md"))
    .catch((err) => {
        console.log("There was an error", err)
    })