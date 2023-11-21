// Include packages needed for this application:

// Import generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
// Import inquirer
const inquirer = require('inquirer');
// Import file system
const fs = require('fs');

// Function call to initialize app
init();

// Create a function to write README file
// function writeToFile(fileName, data) {

//   const markdownContent = generateMarkdown(answers)

//   fs.writeFile('README.md', markdownContent, (err) =>
//   err ? console.log(err) : console.log('Successfully created README file!')
//   );

// }


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

    {
      type: 'input',
      name: 'screenshot1',
      message: 'Write the exact file path for the first screenshot of your application.',
    },

    {
      type: 'input',
      name: 'screenshot2',
      message: 'Write the exact file path for the second screenshot of your application.',
    },

  ])
  .then((answers) => {
    // Use user feedback to generate README.md file

    console.log(generateMarkdown(answers));

    const markdownContent = generateMarkdown(answers)

    fs.writeFile('README.md', markdownContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
    );

  })
  
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });

}

