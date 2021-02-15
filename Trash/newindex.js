const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// const generateHTML = require("./index.html");

const createRole = () => {
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
      if (data === "Engineer") {
        engineerQuestions();
      } else if (data === "Intern") {
        internQuestions();
      } else if (data === "Manager") {
        managerQuestions();
      }
    });
};
//need to call after the function
createRole();

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name:",
      },

      {
        type: "input",
        name: "id",
        message: "Engineer's ID:",
      },

      {
        type: "input",
        name: "email",
        message: "Engineer's email:",
      },

      {
        type: "input",
        name: "GitHub",
        message: "Engineer's Github:",
      },
    ])
    .then((data) => {
      console.log(data);
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      //   let moreInfo = new Engineer(data.name, data.id, data.email, data.GitHub);
      //   team.push(moreInfo);
      // createRole();
    });
};
engineerQuestions();

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "Which school did intern attend?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      console.log(intern);
    });
};
internQuestions();

const ManagerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is manager's office number?",
      },
    ])
    .then((data) => {
      console.log(data);
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      console.log(manager);
    });
};
ManagerQuestions();

//   .then((data) => {
//     fs.writeFile("index.html", generateHTML(data), (err) =>
//       err ? console.error(err) : console.log("file created!")
//     );
//   });

// const createManager = () => {
//     inquirer
//       .prompt([

//
