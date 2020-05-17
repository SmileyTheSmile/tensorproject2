import {Person, Student, Teacher, PersonFactory} from './personLib.js';
import {School, SchoolList} from './school.js';

const factory = new PersonFactory();

let school = new School();

school.add(PersonFactory.createStudent({name: 'Vasia'}));
school.add(PersonFactory.createStudent({name: 'Petia'}));
school.add(PersonFactory.createTeacher({name: 'Misha'}));

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
school.appendStudentBlock(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше