import ComponentFactory from './componentFactory.js';
import PopupList from './popupList.js';
import Popup from './popup.js';
import Header from './header.js';
import Avatar from './avatars.js';
import DataSet from './dataset.js';

studentArr = []; 
const headerInfo = {
    title: 'Ivan.Inc',
    description: 'Добро пожаловать на сайт Ivan.Inc!',
    imageSrc: "img/logo.jpg",
    imageDesc: "ivan.png"
}

const componentFactory = new ComponentFactory();

const head = componentFactory.create(Header, headerInfo);
head.mount(document.body);

let dataset = DataSet({
    object: 'person',
    model: Person
});

dataset.read(i).then(
    result => {
        studentArr.setItem(result)
    });
    
studentArr.forEach((item) => { 
    const person = componentFactory.create(Avatar, item);
    person.mount(document.body);
    
}); 

const popupStack = componentFactory.create(PopupList);
popupStack.mount(document.body);