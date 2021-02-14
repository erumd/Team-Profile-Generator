const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const questions = require("./questions");
console.log(questions);
// const managerQuestions = require ("./questions")

// const engineerCards = engineer.map(
//   (engineer) => `
// <div class= 'card'>
//     <div class = 'card-header'> ${engineer.role} </div>
//     <div class = 'card-title'> ${engineer.name} </div>
//     <div class = 'card-text'> ${engineer.id} </div>
//     <div class = 'card-text'> ${engineer.email} </div>
//     <div class = 'card-text'> ${engineer.github} </div>
// </div>
// `
// );

// const managerCards = manager.map(
//   (manager) => `
// <div class= 'card'>
//     <div class = 'card-header'> ${manager.role} </div>
//     <div class = 'card-title'> ${manager.name} </div>
//     <div class = 'card-text'> ${manager.id} </div>
//     <div class = 'card-text'> ${manager.officeNumber} </div>
// </div>
// `
// );

// const internCards = inter.map(
//   (intern) => `
// <div class= 'card'>
//     <div class = 'card-header'> ${intern.role} </div>
//     <div class = 'card-title'> ${intern.name} </div>
//     <div class = 'card-text'> ${intern.id} </div>
//     <div class = 'card-text'> ${intern.email} </div>
//     <div class = 'card-text'> ${intern.school} </div>

// </div>
// `
// );

// const html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile Generator </title>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
// </head>
// <body>

//     <nav class="navbar navbar-dark bg-danger">
//         <a class="navbar-brand" href="/">Team Profile Generator
//         </a>
//       </nav>

//     <h2></h2>
//     <div class= "container">

//         <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//             <div class="card-header">Engineer</div>
//             <div class="card-body">
//               <h5 class="card-title" id="name"> Name</h5>
//               ${engineerCards.join("")}
//               <p class="card-text" id= "id"> ID </p>
//               <p class="card-text" id= "email"> Email </p>
//               <p class="card-text"> Github </p>

//             </div>
//           </div>

//           <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//             <div class="card-header">Manger</div>
//             <div class="card-body">
//               <h5 class="card-title">Name</h5>
//               ${managerCards.join("")}

//               <p class="card-text" id= "id"> ID </p>
//               <p class="card-text" id= "email"> Office Number </p>
//               <p class="card-text"> </p>
//             </div>
//           </div>

//           <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//             <div class="card-header">Intern</div>
//             <div class="card-body">
//               <h5 class="card-title">Name</h5>
//               ${internCards.join("")}

//               <p class="card-text" id= "id"> ID </p>
//               <p class="card-text" id= "email"> Email </p>
//               <p class="card-text" id = "school"> School </p>
//             </div>
//           </div>

//     </div>

// </body>
// </html>

// `;

inquirer.prompt(questions[2]).then((data) => {
  console.log(data);
});

fs.writeFileSync("index.html", html);
module.exports = index.js;
