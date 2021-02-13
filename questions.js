const role = [
  {
    type: "list",
    name: "choice",
    message: "Select a role to add:",
    choices: ["Engineer", "Intern", "Manager"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is engineer's email?",
  },
  {
    type: "input",
    name: "email",
    message: "What is engineer's GitHub?",
  },
];

const managerQuestions = [
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
];

const internQuestions = [
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
];

exports.role = role;
exports.engineerQuestions = engineerQuestions;
exports.managerQuestions = managerQuestions;
exports.internQuestions = internQuestions;

//Office hours HW helps
const htmlCards = members.map(member => `
  <div class= "col-4 mb-3">
    <div class = "card" >
      <div class= "card-title"> ${member.name}</div>
      <div class= "card-body"> ${member.role}</div>
    <div>
  </div>

`);


