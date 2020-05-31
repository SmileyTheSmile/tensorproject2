import Component from './component.js';

class Teacher extends Person{
    constructor(params) {
        super(params);
        this.type = "teacher";
    }
}

export default Teacher;