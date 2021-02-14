const inquirer = require("inquirer");

const fs = require("fs");
const generateHTML = require("./index.html");


const questions = [];
inquirer
    .prompt([
        // const role = [

            {
              type: "list",
              name: "choice",
              message: "Select a role to add:",
              choices: ["Engineer", "Intern", "Manager"],
            },
          
    

    ])


.then((data) => {


    fs.writeFile("index.html", generateHTML(data), (err) =>
      err ? console.error(err) : console.log("file created!")
    );
}



// const createManager = () => {
//     inquirer
//       .prompt([

// 