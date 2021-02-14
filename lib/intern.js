const Employee = require("./employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    //ADDED BELOW: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(name, id, email);
    // this.role = "Intern";
    // this.name = name;
    // this.id = id;
    // this.email = email;
    // this.icon = "";
    this.school = school;
    // }
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
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
