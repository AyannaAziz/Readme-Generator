// require 'fs' and 'inquirer'
const fs = require('fs');
const inquirer = require('inquirer');

// 
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [

];

// const inquirer = require('inquirer');
function getUserInput () {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your Github user name?',
        name: 'githubusername',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      
      {
        type: 'input',
        message: 'Enter the title of your project.',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter the description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter the installation instructions  of your project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter the usage information of your project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter the contribution guidlines of your project.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter the test instructions for your project.',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Choose the type of license.',
        name: 'license',
        choices: ["Apache", "Boost", "MIT"]
      },

    ])
    .then((response) => {
       // response.confirm === response.password
       console.log(response.githubusername)
       const data = getData(response) 
      
       writeToFile('./utils/ReadMe.md', data)
       //  console.log('Success!')
       // : console.log('You forgot your password already?!')
    }
     
    );
}
 function getData (data){
   var tableOfContents = `## Table of Contents
   ${(data.description != `` ? `* [Description](#description)`:"")}
   ${(data.installation != `` ? `* [Installation](#installation)`:"")}
   ${(data.usage != `` ? `* [Usage](#usage)`:"")}
   ${(data.contribution != `` ? `* [Contribution](#contribution)`:"")}
   ${(data.test != `` ? `* [Test](#test)`:"")}
   * [License](#license)
   * [Questions](#questions)
   `
   var toWrite = data.title != '' ? ('# Title' + '\n' + data.title.toUpperCase() + '\n') : ''
   toWrite += "## Badge" + '\n' 
   toWrite += `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](“https://opensource.org/licenses/MIT”)` + '\n'
  //  toWrite += `![Badge for GitHub](https://img.shields.io/github/languages/top/${data.license}?style=flat&logo=appveyor)` + "\n"
   toWrite += data.description != '' ? ('## Description' + '\n' + data.description + '\n') : ''
   toWrite += tableOfContents + '\n'
   toWrite += data.installation != '' ? ('## Installation' + '\n' + data.installation + '\n') : ''
   toWrite += data.usage != '' ? ('## Usage' + '\n' + data.usage + '\n') : ''
   toWrite += data.contribution != '' ? ('## Contribution' + '\n' + data.contribution + '\n') : ''
   toWrite += data.test != '' ? ('## Test' + '\n' + data.test + '\n') : ''
   toWrite += data.license != '' ? ('## License' + '\n' + data.license + '\n') : ''
   toWrite += "## Questions?" + '\n' + "For any questions, please contact me @ " + data.email + " And visit my github repo https://github.com/" + data.githubusername
   return toWrite
 }
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
 err ? console.error(err) : console.log('Success!')
 );

}

// function to initialize program
function init() {
  getUserInput()

}

// function call to initialize program
init();
