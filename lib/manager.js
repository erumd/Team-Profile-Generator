const Employee = require("./employee");

class Manager extends Employee {
  //trying new way to set role based on tutorial
  constructors(name, id, email, officeNumber, role = "Manager") {
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
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
  getOfficeNumber() {
    return this.officeNumber;
  }
   
  getRole() {
    return this.role;
  }
}

module.export = Manager;
