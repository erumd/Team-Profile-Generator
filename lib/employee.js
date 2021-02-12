class Employee {
  constructor(name, id, email) {
    // ADDED BELOW: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    //super(GitHub, role);

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
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
}

module.exports = Employee;
