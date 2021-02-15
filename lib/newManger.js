const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, managerOfficeNumber) {
    // super(id, email);
    super(managerName, managerId, managerEmail, managerOfficeNumber);

    this.managerName = managerName;
    this.managerId = managerId;
    this.managerEmail = managerEmail;
    this.managerOfficeNumber = managerOfficeNumber;
  }
  getManagerName() {
    return this.managerName;
  }
  getManagerId() {
    return this.managerId;
  }
  getManagerEmail() {
    return this.managerEmail;
  }

  getManagerOfficeNumber() {
    return this.managerOfficeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
