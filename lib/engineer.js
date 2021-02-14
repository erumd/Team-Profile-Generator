const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // ADDED BELOW:  ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    //super in the constructor of the parent class employee. employee has name id email
    super(name, id, email);
    // this.role = "Engineer";
    // this.name = name;
    // this.id = id;
    // this.email = email;
    // this.icon = "";
    this.github = github; //need git hub bc is not common between employee and engineer
  // } DONT NEED BELOW BC HAVE IN EMPLOYEE SUPER
  // getName() {
  //   return this.name;
  // }
  // getId() {
  //   return this.id;
  // }
  // getEmail() {
  //   return this.email;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
