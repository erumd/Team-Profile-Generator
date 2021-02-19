const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // ADDED BELOW:  ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    //super in the constructor of the parent class employee. employee has name, id, email
    super(name, id, email);
   
    this.github = github; //need git hub bc is not common between employee and engineer

  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
