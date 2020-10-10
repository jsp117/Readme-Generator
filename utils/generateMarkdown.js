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
// license section
let lic = "";
let tLic = "";
// contributors section
let con = "";
let tCon = "";
// test section
let tes = "";
let tTes = "";

function generateMarkdown(data) {
  if (data.confirmLicense) {
    if (data.license === "MIT") {
      badge = mitBadge;
      link = mitLink;
    } else if (data.license === "Apache 2.0") {
      badge = apBadge;
      link = apLink;
    } else if (data.license === "GNU General Public 3.0") {
      badge = gnBadge;
      link = gnLink;
    } else if (data.license === "ISC") {
      badge = iscBadge;
      link = iscLink;
    }
  }
  if (data.confirmInstall) {
    ins =
      `\n\n## Installation\n\n${data.install}`;
    tIns =
      `\n* [Installation](#installation)`;
  }
  if (data.confirmUsage) {
    use =
      `\n\n## Usage\n\n${data.usage}`;
    tUse =
      `\n* [Usage](#usage)`;
  }
  if (data.confirmLicense) {
    lic =
      `\n\n## License\n\n[![License: ${data.license}](${badge})](${link})\n\nCopyright &copy; [2020] [${data.name}]`;
    tLic =
      `\n* [License](#license)${tCon}`;
  }
  if (data.confirmCon) {
    con =
      `\n\n## Contributors\n\n${data.contributors}`;
    tCon =
      `\n* [Contributors](#contributors)`;
  }
  if (data.confirmTest) {
    tes =
      `\n\n## Tests\n\n${data.test}`;
    tTes =
      `\n* [Tests](#tests)`;
  }

  
  console.log("badgelink: ", badge);
  console.log("link: ", link);
  console.log("License: ", data.license);
  return `# ${data.projectName}

## Description
${data.desc}
  
## Table of Contents
* [Description](#description)${tIns}${tUse}${tCon}${tTes}
* [Author](#author)${tLic}
${ins}${use}${con}${tes}
  
## Author

${data.name}
Email Address: ${data.email}
  
![Github Profile Picture](https://github.com/${data.username}.png?size=150)${lic}  
 
`;
}

module.exports = generateMarkdown;
