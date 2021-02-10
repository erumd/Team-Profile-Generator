const Employee = require("./employee");

class Manager extends Employee {
  constructors(name, id, email, officeNumber) {
    this.role = "Manager";
    this.officeNumber = officeNumber;
    this.icon = "";
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
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.export = Manager;
