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

// Questions for manager
function showManagerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Pleas enter Manager's name.",
      },

      {
        type: "input",
        name: "id",
        message: "Pleas enter Manager's ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Pleas enter Managers email.",
      },

      {
        type: "input",
        name: "officeNumber",
        message: "Pleas enter Manager's officeNumber.",
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

// Questions for Engineer
function showEngineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Pleas enter Engineer's name.",
      },

      {
        type: "input",
        name: "id",
        message: "Pleas enter Engineer's ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Pleas enter Engineer's email.",
      },

      {
        type: "input",
        name: "GitHub",
        message: "Pleas enter Engineer's Github .",
      },
    ])
    .then((data) => {
      console.log(data);
      let moreInfo = new Engineer(data.name, data.id, data.email, data.GitHub);
      team.push(moreInfo);
      createTeam();
    });
}
// Questions for Intern
function showInternQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Pleas enter Intern's name.",
      },

      {
        type: "input",
        name: "id",
        message: "Pleas enter Intern's ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Pleas enter Intern's email.",
      },

      {
        type: "input",
        name: "school",
        message: "Pleas enter Intern's school.",
      },
    ])
    .then((data) => {
      console.log(data);
      let moreInfo = new Intern(data.name, data.id, data.email, data.school);
      team.push(moreInfo);
      createTeam();
    });
}

// fuction to prompt users which employees they want to add.

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose the employee's job Role",
        choices: ["Manager", "Engineer", "Intern", "Finished"],
        name: "jobRole",
      },
    ])
    .then((answers) => {
      if (answers.jobRole === "Manager") {
        showManagerQuestions();
      } else if (answers.jobRole === "Engineer") {
        showEngineerQuestions();
      } else if (answers.jobRole === "Intern") {
        showInternQuestions();
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
