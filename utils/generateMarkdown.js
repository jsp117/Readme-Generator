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

function generateMarkdown(data) {
  if(data.license[0] === "MIT"){
    badge = mitBadge;
    link = mitLink;
  }else if(data.license[0] === "Apache 2.0"){
    badge = apBadge;
    link = apLink;
  }else if(data.license[0] === "GNU General Public 3.0"){
    badge = gnBadge;
    link = gnLink;
  }else if(data.license[0] === "ISC"){
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
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
  
## Installation
${data.install}
  
## Usage
${data.usage}
  
## License
  
[![License: ${data.license}](${badge})](${link})
  
Copyright &copy; [2020] [${data.name}]
  
## Contributors
${data.contributors}
  
## Author
${data.name}
Email Address: ${data.email}
  
![Github Profile Picture](https://github.com/${data.username}.png?size=150) 

  
## Tests
${data.tests}`;
}

module.exports = generateMarkdown;
