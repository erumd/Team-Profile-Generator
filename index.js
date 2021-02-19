//got help from multiple classmates to create index.js. Different way to complete
//you can combine all question to ask to create separate files. I chose to combine
//there are multiple ways to solve this code.
// My tutor helped me too

const inquirer = require("inquirer");
const fs = require("fs");

const generate = require("./generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//need path to use to .resolve .join
const path = require("path");
//BOTTOM CODE: if you want file to go into folder but I do not.
// const folderPath = path.resolve(__dirname, "dist");  //this path will creat file in the directory Develop Folder

const createFile = path.join("generateIndex.html"); // this will create file "generateIndex.html" in the main folder.

//array output
const teamProfile = [];

function chooseRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose Role",
        choices: ["Manager", "Engineer", "Intern", "Finished"],
        //need the jobRole to apply later to ger data
        name: "jobRole",
      },
    ])
    .then((answers) => {
      if (answers.jobRole === "Manager") {
        managerQuestions();
      } else if (answers.jobRole === "Engineer") {
        engineerQuestions();
      } else if (answers.jobRole === "Intern") {
        internQuestions();
      } else return generateHTML(teamProfile);
    });
}

function engineerQuestions() {
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
        name: "github",
        message: "Engineer's Github Username:",
      },
    ])
    .then((data) => {
      console.log(data);
      let input = new Engineer(data.name, data.id, data.email, data.github);
      teamProfile.push(input);
      chooseRole();
    });
}

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager's name:",
      },

      {
        type: "input",
        name: "id",
        message: "Manager's ID:",
      },

      {
        type: "input",
        name: "email",
        message: "Managers email:",
      },

      {
        type: "input",
        name: "officeNumber",
        message: "Manager's Office Number:",
      },
    ])
    .then((data) => {
      let input = new Manager(
        data.name,
        data.email,
        data.id,
        data.officeNumber
      );
      teamProfile.push(input);
      chooseRole();
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name.",
      },

      {
        type: "input",
        name: "id",
        message: "Intern's ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Intern's email.",
      },

      {
        type: "input",
        name: "school",
        message: "Intern's school.",
      },
    ])
    .then((data) => {
      console.log(data);
      let input = new Intern(data.name, data.id, data.email, data.school);
      teamProfile.push(input);
      chooseRole();
    });
}

function buildTeamProfile() {
  chooseRole();
}

function generateHTML() {
  fs.writeFileSync(createFile, generate(teamProfile));
  console.log("file created!");
}

buildTeamProfile();
