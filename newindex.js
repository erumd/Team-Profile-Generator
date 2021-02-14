const inquirer = require("inquirer");

const fs = require("fs");
const generateHTML = require("./index.html");


const questions = [];
    .prompt([
    

    ])


.then((data) => {


    fs.writeFile("index.html", generateHTML(data), (err) =>
      err ? console.error(err) : console.log("file created!")
    );
}



// const createManager = () => {
//     inquirer
//       .prompt([

// }