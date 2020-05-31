import ComponentFactory from './componentFactory.js';
import PopupList from './popupList.js';
import Popup from './popup.js';
import Header from './header.js';
import Avatar from './avatars.js';
import DataSet from './dataset.js';

const studentArr = [ 
    { 
        fullName: 'Василий Иванов', 
        description: "Главный разработчик данного веб-портала.",
        highlightText: "Главный разработчик данного веб-портала",
        photoUrl: 'img/ava01.jpg', 
        photoDesc: '' 
    },  
    { 
        fullName: 'Иван Васильев', 
        description: "Давно пропавший брат-близнец Василия.",
        highlightText: "Он появится во втором сезоне.",
        photoUrl: 'img/ava02.jpg', 
        photoDesc: '' 
    }, 
    { 
        fullName: 'Василия Иванова', 
        description: "Мать Ивана и Василия, погибшая, когда на их деревню напал Ваас.",
        highlightText: "Она не помнит, как звали их отца, поэтому у них разные отчества.",
        photoUrl: 'img/ava03.jpg', 
        photoDesc: '' 
    }, 
    { 
        fullName: 'Васильян Иванович', 
        description: "8-летний сын Ивана.",
        highlightText: "Ему 3 годика.",
        photoUrl: 'img/ava04.jpg', 
        photoDesc: '' 
    }, 
    { 
        fullName: "Ваас Ив'Ан", 
        description: "Тёмный Лорд Зла.",
        highlightText: "Тёмный Лорд. Находится в поиске Камня Силы.",
        photoUrl: 'img/ava05.jpg', 
        photoDesc: '' 
    }, 
    { 
        fullName: 'ӥ̸̯̙̫̞̹̳̯͈̫͚̤̖́̉̾̈́̆̓͂̎̒̊̓̇͒́́͜в̵̡͉̹̲͖̃̾͐͆̎͊͆͌͐̂̉̾̊̚̕а̷̘̦̹̦͍̞͈̬̣͈̒̉̑͑н̴̖̖͛̎̈́̚͠в̴͇̗̞͔̼̞͎͒̌̂́͐͌̉͊̓͆̾̾͗͋͘а̴̢̛̗̩̮̗̪̠̙̪͉̺̳̌̽̍̇͐̒̒͜ͅн̴̡̲͎͕͚͙̼̺̗̺͉̹̄͌̂и̶̧͚̯̣̠͓̩͍̑̀̂͛́̌͋̓͠а̸̨͉̻̺̀̕в̶̺͕͇͉̜̔̄̃͒̊̿̍̌̾͌͘͝н̵͉͋͒̾̏̈́͗̈́̔͌̋̕͝а̴̞͔͓̖̀̎̉̐̈͗̈́̌͑̓͠͝ѝ̷̨͕̍̎̐͛̆̎͘͠͝в̷͇͒͑̔̋̔̓͝н̷͔̙̝͑̂̓͗̎̑̎͐͛̀̚͝а̸͙̩͉̹̹̙͋͑̆̈́̒͑̈́́̓̄и̸̨̗̟̭̫̋̄̓̑̈͂̋͘͜ͅв̶̢̰̩̜̺̲̦̮͍͈̊̓̾́͂̿̔͘̕͝н̵̢̧̻̤͖̇̉͋̈́͛͑͘͜а̷̪͎̓̄̆̓͂̀̌̂͘͠͝', 
        description: "00000000000000",
        highlightText: "1111111111111",
        photoUrl: 'img/ava06.jpg', 
        photoDesc: '' 
    }, 
]; 
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

dataset.read(1).then(
    result => { console.log(result.toJson()) });

studentArr.forEach((item) => { 
    const person = componentFactory.create(Avatar, item);
    person.mount(document.body);
    
}); 

const popupStack = componentFactory.create(PopupList);
popupStack.mount(document.body);