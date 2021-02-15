const inquirer = require("inquirer");
const fs = require("fs");

const generate = require("./generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//need path to use to .resolve .join
const path = require("path");
//BOTTOM CODE: if you want file to go into folder but I do not.
//const folderPath = path.resolve(__dirname, "Develop");  this path will creat file in the directory Develop Folder
const createFile = path.join("generateIndex.html"); // this will create file "generateIndex.html" in the Develop folder.

//array output
const teamProfile = [];

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Manager's name:",
      },

      {
        type: "input",
        name: "managerId",
        message: "Manager's ID:",
      },

      {
        type: "input",
        name: "managerEmail",
        message: "Managers email:",
      },

      {
        type: "input",
        name: "ManagerOfficeNumber",
        message: "Manager's Office Number:",
      },
    ])
    .then((data) => {
      let moreInfo = new Manager(
        data.managerName,
        data.managerEmail,
        data.managerId,
        data.managerOfficeNumber
      );
      teamProfile.push(moreInfo);
      createTeam();
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
        name: "GitHub",
        message: "Engineer's Github:",
      },
    ])
    .then((data) => {
      console.log(data);
      let moreInfo = new Engineer(data.name, data.id, data.email, data.GitHub);
      teamProfile.push(moreInfo);
      createTeam();
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
      let moreInfo = new Intern(data.name, data.id, data.email, data.school);
      teamProfile.push(moreInfo);
      createTeam();
    });
}

function createTeam() {
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

//this writes the file
function buildTeamProfile() {
  // checks if have an existing file before writing it. NOT sure
  //   if (!fs.existsSync(folderPath)) {
  //     fs.mkdirSync(folderPath);
  //   }
  createTeam();
}

function generateHTML() {
  console.log(teamProfile);
  fs.writeFileSync(createFile, generate(teamProfile));
  console.log("file created!");
}

// fs.writeFile("generateIndex.html", generateHTML(), (err) =>
//   err ? console.error(err) : console.log("file created!")
// );
buildTeamProfile();
