//Вы не могли бы проверить мою домашнюю 3?
class Person{
    constructor(params) {
       this.fullName = params.fullName;
       this.birthDate = params.birthDate;
       this.age = params.birthDate;
       this.photoUrl = params.photoUrl;
       this.type = "person";
    }
}

class Student extends Person{
    constructor(params) {
        super(params);
        this.university = params.university;
        this.course = params.course;
        this.type = "student";
    }
}

class Teacher extends Person{
    constructor(params) {
        super(params);
        this.type = "teacher";
    }
}

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

class SchoolList{
    constructor(){
        this.list = [];
    }

    add(person){
        this.list.push(person);
    }

    remove(name){
        this.list.splice(this.list[name]);
    }

    find(name){
        return this.list[name];
    }
}

class School{
    constructor(){
        this.students = new SchoolList;
        this.teachers = new SchoolList;
    }

    add(type, params){
        let scholar = personFactory.create(type, params);
        switch(type){
            case "student": this.students.add(scholar); console.log("Ученик успешно зачислен."); break;
            case "teacher": this.teachers.add(scholar); console.log("Учитель успешно нанят."); break;
            default: console.log("Вы ввели что-то не то.");
        }
    }
    
    kickOut(type, name){
        switch(type){
            case "student": this.students.remove(name); console.log("Ученик успешно отчислен."); break;
            case "teacher": this.teachers.remove(name); console.log("Учитель успешно уволен."); break;
            default: console.log("Вы ввели что-то не то.");
        }
    }

    getPerson(type, name){
        switch(type){
            case "student": return this.students.find(name);
            case "teacher": return this.teachers.find(name)
            default: console.log("Вы ввели что-то не то.");
        }
    }
}

const personFactory = new PersonFactory();
const school = new School();

school.add('student', {
                        fullName: 'Маша Иванова',
                        university: 'УГАТУ',
                        age: 20,
                        course: 2,
                        birthDate: new Date(2000, 0, 1),
                        photoUrl: '/photo1'});
console.log(school.getPerson('student', 'Маша Иванова'));
school.kickOut('student', 'Маша Иванова');

school.add('teacher', {
                        fullName: 'Маша Иванова',
                        university: 'УГАТУ',
                        age: 20,
                        course: 2,
                        birthDate: new Date(2000, 0, 1),
                        photoUrl: '/photo1'});
console.log(school.getPerson('teacher', 'Маша Иванова'));
school.kickOut('teacher', 'Маша Иванова');