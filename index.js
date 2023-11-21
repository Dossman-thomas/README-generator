// Include packages needed for this application:

// Import generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
// Import inquirer
const inquirer = require('inquirer');
// Import fs
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}


// TODO: Create a function to initialize app
function init() {

  // ask the questions here
  inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  let responses = {
    title: "Turtle"
  }

  console.log(generateMarkdown(responses));
  
}


// Function call to initialize app
init();
