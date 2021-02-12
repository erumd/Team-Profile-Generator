const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // ADDED BELOW:  ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(name, github);
    this.role = "Engineer";
    this.name = name;
    this.id = id;
    this.email = email;
    this.icon = "";
    this.github = github;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
