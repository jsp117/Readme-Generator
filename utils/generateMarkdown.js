const mitBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
const mitLink = "https://www.mit.edu/~amini/LICENSE.md";
const apBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
const apLink = "https://www.apache.org/licenses/LICENSE-2.0";
const gnBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
const gnLink = "https://www.gnu.org/licenses/gpl-3.0";
const iscBadge = "https://img.shields.io/badge/License-ISC-blue.svg";
const iscLink = "https://opensource.org/licenses/ISC";
var badge = "";
var link = "";
// install section
let ins = "";
let tIns = "";
// usage section
let use = "";
let tUse = "";
// contributors section
let con = "";
let tCon = "";

function generateMarkdown(data) {
  if (data.confirmInstall) {
    ins =
    `## Installation
    ${data.install}`;
    tIns = 
    `\n* [Installation](#installation)`;
  }
  if (data.confirmUsage) {
    use =
    `## Usage
    ${data.Usage}`;
    tUse = 
    `\n* [Usage](#usage)`;
  }
  if (data.confirmCon) {
    con =
    `## Contributors
    ${data.contributors}`;
    tCon = 
    `\n* [Contributors](#contributors)`;
  }

  if (data.license[0] === "MIT") {
    badge = mitBadge;
    link = mitLink;
  } else if (data.license[0] === "Apache 2.0") {
    badge = apBadge;
    link = apLink;
  } else if (data.license[0] === "GNU General Public 3.0") {
    badge = gnBadge;
    link = gnLink;
  } else if (data.license[0] === "ISC") {
    badge = iscBadge;
    link = iscLink;
  }
  console.log("badgelink: ", badge);
  console.log("link: ", link);
  console.log("License", data.license[0]);
  return `# ${data.projectName}

## Description
${data.desc}
  
## Table of Contents
* [Description](#description)${tIns}${tUse}
* [License](#license)${tCon}
* [Tests](#tests)
  
${ins} 
  
${use}
  
## License
  
[![License: ${data.license}](${badge})](${link})
  
Copyright &copy; [2020] [${data.name}]
  
${con}
  
## Author
${data.name}
Email Address: ${data.email}
  
![Github Profile Picture](https://github.com/${data.username}.png?size=150) 

  
## Tests
${data.tests}`;
}

module.exports = generateMarkdown;
