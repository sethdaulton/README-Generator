/**
const carObject = {
    make: "Honda",
    model: "Civic"
}

console.log(carObject.make);

// const make = carObject.make
const { make, model } = carObject // this is object destructuring

console.log(make);
console.log(model);
*/

const generateMarkdown = ({ title, description, tableOfContents, installation, usage, license, contributing, questions }) => {
return `
# ${title}

## Description
${description}

## Table of Contents
${tableOfContents}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing Guidelines
${contributing}

## Questions
${questions}
`
}
  

module.exports = generateMarkdown