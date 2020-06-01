class Person {
    constructor(params) {
       for(let item in params) {
        this.state.item = item;
       }
    }
 
    get fullName() {
       return `${this.title}`;
    }
 };

export default Person;