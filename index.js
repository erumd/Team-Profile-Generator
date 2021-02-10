const inquirer = require("inquirer");

const fs = require("fs");

const Employee = require("./lib/employee");

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const questions = require("./questions");
