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
      // {
      //   type: 'input',
      //   message: 'What is your email?',
      //   name: 'email',
      // },
      
      // {
      //   type: 'input',
      //   message: 'Enter the title of your project.',
      //   name: 'title',
      // },
      // {
      //   type: 'input',
      //   message: 'Enter the description of your project.',
      //   name: 'description',
      // },
      // {
      //   type: 'input',
      //   message: 'Enter the installation instructions  of your project.',
      //   name: 'installation',
      // },
      // {
      //   type: 'input',
      //   message: 'Enter the usage information of your project.',
      //   name: 'usage',
      // },
      // {
      //   type: 'input',
      //   message: 'Enter the contribution guidlines of your project.',
      //   name: 'contribution',
      // },
      // {
      //   type: 'input',
      //   message: 'Enter the test instructions for your project.',
      //   name: 'test',
      // },
      {
        type: 'list',
        message: 'Choose the type of license.',
        name: 'license',
        choices: ["Apache", "Boost", "MIT"]
      },

    ])
    .then((response) => {
       // response.confirm === response.password
       const data = response.githubusername + "\n" + response.license 
      
       writeToFile('./utils/ReadMe.md', data)
       //  console.log('Success!')
       // : console.log('You forgot your password already?!')
    }
     
    );
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
