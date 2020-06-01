import Component from './component.js';

class Student extends Person{
    constructor(params) {
        super(params);
        this.university = params.university;
        this.course = params.course;
        this.type = "student";
    }
}

export default Student;