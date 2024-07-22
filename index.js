// index.js

const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate README content
const generateREADME = (answers) => {
  return `# ${answers.title}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}
`;
};

// Inquirer prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the installation process (if any):',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of this project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples of tests for your application and how to run them:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache', 'None'],
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    // Write README file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file successfully created!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
