const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateSite = require('./src/page-template');
const fs = require('fs');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "team.html");

const teamMembers = [];

const buildHTML = () => {
    console.log(teamMembers);

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "UTF-8")
};


const createManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: "What is the Team Managers Name?",
            },
            {
                type: "input",
                name: 'id',
                message: "What is the Team Managers ID?",
            },
            {
                type: "input",
                name: 'email',
                message: "What is the Team Managers Email?",
            },
            {
                type: "input",
                name: 'officeNumber',
                message: "What is the Team Managers Office Number?",
            }
        ]).then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            // answers.type = 'Manager';
            teamMembers.push(manager);
            checkToAddMore();
        })
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "What is the Engineers Name?",
        },
        {
            type: "input",
            name: 'id',
            message: "What is the Engineers ID?",
        },
        {
            type: "input",
            name: 'email',
            message: "What is the Engineers Email?",
        },
        {
            type: "input",
            name: 'github',
            message: "What is the Engineers Github Username?",
        }
    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // answers.type = 'Engineer'
        teamMembers.push(engineer);
        checkToAddMore();
    })
};

const createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "What is the Interns Name?",
        },
        {
            type: "input",
            name: 'id',
            message: "What is the Interns ID?",
        },
        {
            type: "input",
            name: 'email',
            message: "What is the Interns Email?",
        },
        {
            type: "input",
            name: 'school',
            message: "What School does the Interns go to?",
        }
    ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // answers.type ="Intern"
        teamMembers.push(intern);
        checkToAddMore();
    })
}

const checkToAddMore = () => {
    inquirer.prompt(
        {
            type: "list",
            name: 'menu',
            message: "Would you like to add more employees?",
            choices: [
                'Add an Engineer',
                'Add an Intern',
                'I am done building my team..',
            ]
        }
    ).then(function (answers) {
        switch (answers.menu) {
            case "Add an Engineer": {
                return createEngineer();
            }
            case "Add an Intern": {
                return createIntern();
            }
            case "I am done building my team..": {
                return buildHTML();
            }
        }
    })
};

    // .then((data) => {
    //     const manager = new Manager(data);
    //     teamMembers.push(manager);
    //     mainMenu(

    //     )
    // })
// };

createManager();