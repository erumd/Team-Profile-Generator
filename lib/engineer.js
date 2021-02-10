const Employee = require('./Employee')
class Engineer extends Employee {
    constructor (name, id, email, github) {
    this.role = 'Engineer';
    this.icon = '';
    this.github = github;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }


}

module.exports = Engineer; 