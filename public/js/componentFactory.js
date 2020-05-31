import Component from './component.js';

class ComponentFactory {
    create(component, options) {
        return new component(options || {});
    }
 }

 export default ComponentFactory;