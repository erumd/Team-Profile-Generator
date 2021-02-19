const generateManagerCard = require("./dist/managerCard");
const generateEngineerCard = require("./dist/engineerCard");
const generateInternCard = require("./dist/internCard");

const createTeam = (teamMembers) => {
  const htmlCards = [];

  const managerObjects = teamMembers.filter((employee) => employee.getRole() === "Manager");
  htmlCards.push(managerObjects.map((manager) => generateManagerCard(manager)).join());

  const engineerObjects = teamMembers.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  htmlCards.push(engineerObjects.map((engineer) => generateEngineerCard(engineer)).join()
  );

  const internObjects = teamMembers.filter(
    (employee) => employee.getRole() === "Intern"
  );
  htmlCards.push(
    internObjects.map((intern) => generateInternCard(intern)).join()
  );

  console.log(htmlCards);
  return htmlCards;
};

function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator </title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  </head>
  <body>
  
      <nav class="navbar navbar-dark bg-danger">
          <a class="navbar-brand" href="/">Team Profile Generator 
          </a>
        </nav>
  
      <h2></h2>
      <div class= "container">
      <div>${createTeam(data)}</div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      
  </body>
  </html>
  `;
}

module.exports = generateHTML;
