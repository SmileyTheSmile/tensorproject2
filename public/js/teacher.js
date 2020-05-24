import Person from './person.js';

class Teacher extends Person{
    constructor(params) {
        super(params);
        this.type = "teacher";
    }
}

export default Teacher;