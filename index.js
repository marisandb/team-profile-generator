const inquirer = require('inquirer');
const fs = require('fs')

const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const generatePage = require("./src/generatePage")

let managerObj = {}
let engineerObj = {}
let internObj = {}
const employees = [];

const promptManager = [
        {
            type: 'input',
            name: 'name',
            message: `Please enter your team manager's name`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log(`Please enter your team manager's name`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter your team manager's ID`,
            validate: idInput => {
                if(idInput) {
                    return true;
                }
                else {
                    console.log(`Please enter your team manager's ID`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter your team manager's email`,
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }
                else {
                    console.log(`Please enter your team manager's email`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Please enter your team manager's office phone number`,
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                }
                else {
                    console.log(`Please enter your team manager's office phone number`);
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMemberQ',
            message: "Would you like to add a member to this manager's team?",
            when: ({ officeNumber }) => {
                if (officeNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Which role would you like to add to this manager's team?",
            choices: ['Engineer', 'Intern'],
            when: ({addMemberQ}) => {
                if (addMemberQ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]

const promptEngineer = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter your engineer's name`,
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                console.log(`Please enter your engineer's name`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter your engineer's ID`,
        validate: idInput => {
            if(idInput) {
                return true;
            }
            else {
                console.log(`Please enter your engineer's ID`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter your engineer's email`,
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                console.log(`Please enter your engineer's email`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter your github username`,
        validate: githubInput => {
            if(githubInput) {
                return true;
            }
            else {
                console.log(`Please enter your github username`);
                return false;
            }
        }
    }
]

const promptIntern = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter your engineer's name`,
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                console.log(`Please enter your engineer's name`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter your engineer's ID`,
        validate: idInput => {
            if(idInput) {
                return true;
            }
            else {
                console.log(`Please enter your engineer's ID`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter your intern's email`,
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                console.log(`Please enter your intern's email`);
                return false;
            }
        }
    },
]



function init () {
    return inquirer
    .prompt(promptManager)
    .then(response => {
        managerObj = response
        const newManager = new Manager(response.name, response.id,response.email, response.officeNumber);
        employees.push(newManager);
        if (managerObj.addAnother) {
            if (managerObj.addTeamMember.includes('Engineer')) {
                promptEngineer();
                return
            } else {
                promptIntern();
                return;
            }
        } else {
            fs.writeFile(`./dist/index.html`, generatePage(employees), (err) => {
                console.log("YOur team's page has been generated")
                if (err) throw err
            })
        }
    })
}


init();