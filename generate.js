const generateLicenseBadge = (licenseType) => {
  switch (licenseType) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "BSD 2-Clause 'Simplified' License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";

    case "BSD 3-Clause 'New' or 'Revised' License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

    case "Create Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";

    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";

    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

    case "GNU Lesser General Public License v2.1":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

    default:
      break;
  }
};

const generateTableOfContents = (arrayOfSections) => {
  const formattedArray = arrayOfSections.map((sectionName) => {
    return `- [${sectionName}](#${sectionName.toLowerCase()})`;
  });
  return formattedArray.join("\n");
};

const generateMarkdown = ({
  title,
  tableOfContents,
  description,
  installation,
  usage,
  license,
  contributing,
  questions,
  username,
  github,
  email,
}) => {
  return `
# ${title}

${generateLicenseBadge(license)}

## Table of Contents
${generateTableOfContents(tableOfContents)}

## Description
${description}

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

[${username}](${github})

${email}
`;
};

module.exports = generateMarkdown;
