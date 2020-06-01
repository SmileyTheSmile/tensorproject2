import ComponentFactory from './componentFactory.js';
import Component from './component.js';
import PopupList from './popupList.js';
import Popup from './popup.js';
import Header from './header.js';
import Avatar from './avatars.js';

describe("Test block", function() {
   'use strict';
   
   test("Testing the Component class.", function() {
      let component = new Component({});
      assert(component instanceof Component);
   });

   test("Testing the Component's rendering function.", function() {
      let component = new Component({});
      let render = component.render();
      assert.equal(render,'<div></div>');
   });

   test("Testing the Component's mounting function.", function() {
      let component = new Component({});
      let element = document.createElement('div');
      component.mount(element);
      assert.equal(element.innerHTML,'<div></div>');
   });

   test("Testing the ComponentFactory class.", function() {
      let componentFactory = new ComponentFactory();
      assert(componentFactory instanceof ComponentFactory);
   });

   test("Testing the the Header class.", function() {
      let componentFactory = new ComponentFactory();
      const headerInfo = {
         title: 'Ivan.Inc',
         description: 'Добро пожаловать на сайт Ivan.Inc!',
         imageSrc: "img/logo.jpg",
         imageDesc: "ivan.png"
      };
      const head = componentFactory.create(Header, headerInfo);
      assert(head instanceof Header);
   });

   test("Testing the PopUp class.", function() {
      let popup = new Popup();
      assert(popup instanceof Popup);
   });

   test("Testing the Avatar class.", function() {
      let avatar = new Avatar({});
      assert(avatar instanceof Avatar);
   });

   test("Testing the PopupList class.", function() {
      let popupList = new PopupList({});
      assert(popupList instanceof PopupList);
   });

   test("Testing the PopupList's rendering function.", function() {
      let popupList = new PopupList({});
      let render = popupList.render();
      assert.equal(render,`<div class="popup-list"></div>`);
   });
   // Я не был уверен сколько тестов достаточно сделать, поэтому сделал столько.
});