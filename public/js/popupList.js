import Component from './component.js';
import Popup from './popup.js';

class PopupList extends Component {
    constructor(params) {
       super(params);
       this.popups = {};
    }
 
    render() {
       return `<div class="popup-list"></div>`;
    }

    clear() {
		this.popups.forEach( p => {
			p.unmount();
        });
    }
    
    open(key, params) {
        if (this.popups[key]) {
            this.popups[key].unmount();
        }
        const popup = new Popup(params);
        this.popups[key] = popup;
        popup.mount(this.container);
    }

    append(options) {
		const popup = factory.create(Popup, options);
		this.popups.push(popup);
		popup.mount(this.getContainer());
    }
}

export default PopupList;