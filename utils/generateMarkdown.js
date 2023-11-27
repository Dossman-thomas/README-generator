// Function that returns a license badge and link based on which license is passed in
// If project is unlicensed, return an empty string
function renderLicenseBadge(license) {

  if (license === 'MIT') {

    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  } else if (license === 'Apache 2.0'){

    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

  } else if (license === 'GPL 3.0'){

    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

  } else if (license === 'BSD 3'){

    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

  } else if (license === 'Creative Commons'){

    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';

  } else {

    return '';

  } 
}

// Function that returns the license section of README
// If unlicense, return an empty string
function renderLicenseSection(license) {
  if (license === 'Unlicensed'){

    return '';

  } else {

    return `## License

This project is licensed under the [${license} License] - see LICENSE file for more details.`
  }
}


// Function that returns the license section in the table of contents section of the README
// if unlicensed, return an empty string
function renderLicenseToC(license){

  if (license === 'Unlicensed'){
    return '';
  } else {
    return '- [License](#license)'
  }
}



// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

## Description

${data.description}   

## Table of Contents

${renderLicenseToC(data.license)}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

visit: ${data.link}

${data.usage}

## Contributing

Thank you for considering contributing to this project! I welcome your contributions.

## How to Contribute

${data.contribute}

## Tests

This project includes a test suite to ensure its functionality. Before running the tests, make sure to install any necessary dependencies.

To test this project, follow these steps: 

${data.tests}

## Questions

[Find me on Github!](github.com/${data.username})

If you have any further questions, feel free to reach me via ${data.email}

`;
}

// export module
module.exports = generateMarkdown;
