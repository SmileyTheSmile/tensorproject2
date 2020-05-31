import Component from './component.js';

class Popup extends Component {
    render({caption, content, contentComponent}) {
        return `<div class="popup">
            <div class="popup__header">
                <p class="popup__title" title="${caption}">${caption}</p>
                <img class="popup__closeButton" title="Закрыть" alt="Кнопка закрыть" src="img/ui/close_x.png"/>
            </div>
            <div class="popup__content">
            ${content}
            </div>
        </div>`;
    }

    afterMount() {
        this._closeButton = this.getContainer().querySelector('.popup__closeButton');
        this.subscribeTo(this._closeButton, 'click', this.onClose.bind(this));
        this.setPopupPosition();
    }

    beforeUnmount() {
        delete this._closeButton;
    }

    onClose() {
        this.close();
    }

    close() {
        this.unmount();
    }
    
    setPopupPosition() {
        const container = this.getContainer();
        const offset = this.options.offset;

        container.style.left = offset.left + 'px';
        container.style.top = offset.top + 'px';
        
        let position = this.coutPopupPosition(this.options.target.getBoundingClientRect(), container.getBoundingClientRect());
        container.style.left = position.left + 'px';
        container.style.top = position.top + 'px';
    }

    coutPopupPosition(target, offset) {
        let {width=0, height=0, left=0, top=0} = offset || {};
        let {left:tleft=0, top:ttop=0} = target || {};

        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        const defOffset = 8;

        if (left + width === innerWidth) {
            tleft = 0;
        }

        left = tleft + left;
        top = ttop - top;

        if (tleft + width > innerWidth) {
            left = left + (innerWidth - (width + tleft)) - defOffset;
        }

        if (ttop + height >= innerHeight) {
            top = top + (innerHeight - (ttop + height)) - defOffset;
        }

        return {left, top};
    }
 }

export default Popup;