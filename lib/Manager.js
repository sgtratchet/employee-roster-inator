const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name){
        super();
        this.officeNumber = officeNumber;
    }

    getRole(){
        return Manager;
    };
}

module.exports = Manager