const inquirer = require("inquirer");
const fs = require("fs");

const generate = require("./generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//need path
const path = require("path");

//Acttivity example from class
const output = path.resolve(__dirname, "output");
const goingOut = path.join(output, "team.profile"); //need "team.profile" to generate and call later

const teamProfile = [];

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
      let moreInfo = new Manager(
        data.name,
        data.email,
        data.id,
        data.officeNumber
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

//function to write file
function buildTeamProfile() {
  // statement checks if there is an exisiting filles prior to writing a the file
  //   if (!fs.existsSync(output)) {
  //     fs.mkdirSync(output);
  //   }
  createTeam();
}

function generateHTML() {
  console.log(teamProfile);
  fs.writeFileSync(goingOut, generate(teamProfile));
  console.log("file created!");
}

// fs.writeFile("index.html", generateHTML(), (err) =>
//   err ? console.error(err) : console.log("file created!")
// );
buildTeamProfile();
