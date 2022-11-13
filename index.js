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
      type: "input",
      name: "description",
      message: "Write a description of your project here",
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Write out your table of contents here",
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
      type: "input",
      name: "license",
      message: "Write your license comments here",
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
  ])
  .then((answers) => {
    const htmlPageContent = generateMarkdown(answers);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
