export class Person{
    constructor(params) {
       this.fullName = params.fullName;
       this.birthDate = params.birthDate;
       this.age = params.birthDate;
       this.photoUrl = params.photoUrl;
       this.type = "person";
    }
}

export class Student extends Person{
    constructor(params) {
        super(params);
        this.university = params.university;
        this.course = params.course;
        this.type = "student";
    }
}

export class Teacher extends Person{
    constructor(params) {
        super(params);
        this.type = "teacher";
    }
}

export class PersonFactory{
    createStudent(name, birthdate, age, photoUrl, university, course){
        return new Student({name, birthdate, age, photoUrl, university, course})
    }

    createTeacher(name, birthdate, age, photoUrl){
        return new Teacher({name, birthdate, age, photoUrl})
    }

    createPerson(name, birthdate, age, photoUrl){
        return new Person({name, birthdate, age, photoUrl})
    }

    create(type, params){
        let instance;
        switch(type){
            case "student": instance = this.createStudent(params); break;
            case "teacher": instance = this.createTeacher(params); break;
            default: instance = this.createPerson(params);
        }
        instance.id = Math.random().toString(32).slice();
        return instance;
    }
}

modules.exports = {Person, Student, Teacher, PersonFactory}