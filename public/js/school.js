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

export default {SchoolList, School};