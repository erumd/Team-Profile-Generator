
const role = [
    {
    type: 'list',
    name: 'choice',
    message: 'Select a role to add:',
    choices: ['Engineer', 'Intern', 'Manager'],
    }

]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is engineer's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is engineer's email?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is engineer's GitHub?"
    },
    

]



const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is manager's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is manager's office number?"
    }
];



const internQuestions = [

]




exports.managerQuestions = managerQuestions;
exports.engineerQuestions = engineerQuestions;
exports.internQuestions = internQuestions;
exports.role = role;