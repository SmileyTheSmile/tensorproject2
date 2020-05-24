import Person from './person.js';
import Student from './student.js';
import Teacher from './teacher.js';

class PersonFactory{
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

module.exports = PersonFactory;