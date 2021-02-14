const Employee = require("./Employee");
class Manager extends Employee {
  //trying new way to set role based on tutorial
  constructor(name, id, email, officeNumber) {
    // ADDED BELOW: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.export = Manager;
