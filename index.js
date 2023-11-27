// Include packages needed for this application:

// Import generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
// Import inquirer
const inquirer = require('inquirer');
// Import file system
const fs = require('fs');

// Array of questions for user input
const questions = [

    // Title
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },

    // Description
    {
      type: 'input',
      name: 'description',
      message: 'Write a concise description of your application.',
    },

    // Installation Instructions
    {
      type: 'input',
      name: 'install',
      message: 'Write a detailed description of how to install your application.',
    },

    // Deployed Project Link
    {
      type: 'input',
      name: 'link',
      message: 'What is the link url for your deployed application?',
    },

    // Usage Instructions
    {
      type: 'input',
      name: 'usage',
      message: 'Write a detailed description of how to use your application.',
    },

    // License
    {
      type: 'list',
      name: 'license',
      message: 'Which license is your application covered under?',
      choices: ['MIT', 'Apache 2.0', 'GPL-3-0', 'BSD 3', 'Creative Commons', 'Unlicensed']
    },

    // Contributors
    {
      type: 'input',
      name: 'contribute',
      message: 'Write detailed guidelines and information for individuals who would like to contribute to your work.',
    },

    // Tests
    {
      type: 'input',
      name: 'tests',
      message: 'Write detailed instructions on how to test this application.',
    },

    // Github username input
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },

    // Email input
    {
      type: 'input',
      name: 'email',
      message: 'What is your preferred email for individuals who would like to reach out to you with further questions?',
    },

  ];

// Function to initialize app
function init() {

  inquirer

// Pass questions in here
  .prompt(questions)
  .then((data) => {
    // Use user feedback data to generate README.md file

    // console.log(generateMarkdown(data));

    const markdownContent = generateMarkdown(data)

    // writes README using generateMarkdown module and alerts any errors.  If no errors, console log success message.
    fs.writeFile('README.md', markdownContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
    );

  })

}


// Function call to initialize app
init();