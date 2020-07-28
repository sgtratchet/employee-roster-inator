const inquirer = require('inquirer');


const promptNewTeam = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team Managers name?',
            validate: managerNameInput => {
                if (managerNameInput) {
                  return true;
                } else {
                  console.log('Please enter a name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team Managers Email?'
        },
        {
            type: 'input',
            name: 'managerPhone',
            message: 'What is the team Managers office phone number?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team Managers Employee ID?'
        },
        // {
        //     type: 'list',
        //     name: 'employeeAdd',
        //     message: 'Please select an option, add team member or finish',
        //     choices: ['add Engineer', 'add Intern', 'finish'],
           
        // }
        ])
        .then(teamLeadInfo => {
            managerInfo.projects.push(teamLeadInfo);
            return managerInfo;
        }
    )
};
promptNewTeam()