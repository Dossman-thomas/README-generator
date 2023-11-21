// Include packages needed for this application:

// Import generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
// Import inquirer
const inquirer = require('inquirer');
// Import file system
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [

// ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}


// TODO: Create a function to initialize app
function init() {

  inquirer

// Pass your questions in here
  .prompt([

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Write a concise description of your application.',
    },

    {
      type: 'input',
      name: 'link',
      message: 'What is the link url for your deployed application?',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Write a detailed description of how to use your application.',
    },

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(generateMarkdown(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

}


// Function call to initialize app
init();
