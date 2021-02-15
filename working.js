const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.profile");

const generate = require("./generateHTML");

// const Employee = require("./lib/Employee");

const team = [];

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
      team.push(moreInfo);
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
      team.push(moreInfo);
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
      team.push(moreInfo);
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
        name: "Role",
      },
    ])
    .then((answers) => {
      if (answers.jobRole === "Manager") {
        managerQuestions();
      } else if (answers.jobRole === "Engineer") {
        engineerQuestions();
      } else if (answers.jobRole === "Intern") {
        internQuestions();
      } else return generateHTML(team);
    });
}

//function to write file
function buildTeamProfile() {
  // statement checks if there is an exisiting filles prior to writing a the file
  //   if (!fs.existsSync(OUTPUT_DIR)) {
  //     fs.mkdirSync(OUTPUT_DIR);
  //   }

  createTeam();
}

function generateHTML() {
  console.log(team);
  fs.writeFileSync(outputPath, generate(team));
  console.log("file created!");
}

// fs.writeFile("index.html", generateHTML(), (err) =>
//   err ? console.error(err) : console.log("file created!")
// );
buildTeamProfile();
