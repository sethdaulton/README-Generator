const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generate");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your README?",
    },

    {
      type: "checkbox",
      name: "tableOfContents",
      message: "Choose what sections you want your table of contents to have",
      choices: ["Description", "Installation", "Usage", "License", "Contributing", "Questions"],
    },

    {
      type: "input",
      name: "description",
      message: "Write a description of your project here",
    },

    {
      type: "input",
      name: "installation",
      message: "Write your installation instructions here",
    },
    {
      type: "input",
      name: "usage",
      message: "Write your usage information here",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Create Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Write your contribution guidelines here",
    },
    {
      type: "input",
      name: "tests",
      message: "Write your test instructions here",
    },
    {
      type: "input",
      name: "questions",
      message: "Write your questions here",
    },
    {
      type: "input",
      name: "username",
      message:
        "Write your GitHub username here",
    },
    {
        type: "input",
        name: "github",
        message:
          "Write the URL to your GitHub profile here",
      },
    {
      type: "input",
      name: "email",
      message: "Write your email address here",
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateMarkdown(answers);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
