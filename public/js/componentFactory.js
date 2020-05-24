import Component from './component.js';

class ComponentFactory {
    create(component, options) {
        return new component(options || {});
    }
 }

module.exports = ComponentFactory;