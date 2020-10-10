# Readme Generator

## Description
This application is a Readme Generator that takes user input and creates a styled readme. I began this project by laying out my questions in an object. I then created a function using Inquirer to prompt users for each question. For some questions, I allow the user to select whether or not they want that section in the final readme using the when statement that is included in Inquirer. When the application begins, the init function calls the userInfo function that prompts the user and returns the answers they type in. Those answers are then used to generate markdown, which is in turn written to the readme. In generateMarkdown.js, I began by setting up the different badges and links needed for the license section and assigned them to variables. The license chosen by the user changes the badge and link displayed on the final readme through if statements. In order to generate the actual text on the readme with markdown, I used template literals to nest variables within a readme template that I created. The end result allows users to pick and choose what they want to display in their readme, and have it come out completely styled in markdown.
  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built_with)
* [Contributors](#contributors)
* [Author](#author)
* [License](#license)


## Installation

To install all dependencies, run Npm install in your terminal while opened to the file path you downloaded to. 

## Usage

To run this application, open your terminal to the folder it is located in, and type node index.js. Follow the series of prompts to the best of your ability, and it will generate a styled readme in the same folder. 

## Built_with

* JavaScript
* [NodeJS](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Github](https://github.com/)

## Contributors

My instructor Roger Le, and Teaching assistants Manuel and Kerwin.
  
## Author

Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp
  
![Github Profile Picture](https://github.com/jsp117.png?size=150)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright &copy; [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.