import Component from './component.js';
import Component from './component.js';

class Avatar extends Component {
    constructor({item}) {
        super();
        this.state.item = item;
    }

    render(options, {item}) {
        return `<div class="card card_person">
            <img class="card__img card__img_round" src="${item.photo || 'img/ui/default_pix.jpg'}" alt="Аватар ${item.title}" />
            <p class="card__title" title="${item.title || ''}">${item.title || ''}</p>
            <span class="card__description" title="${item.study || ''}">${item.study || ''}</span>
        </div>`;
    }

    afterMount() {
        this.subscribeTo(this.getContainer(), 'click', this.onClick.bind(this));
    }

    onClick() {
        this.openPersonPopup(this.state.item);
    }

    openPersonPopup(item) {
        if (this.openPopupAction === undefined) {
            this.openPopupAction = factory.create(OpenPopupAction);
        }
        this.openPopupAction.execute({
            caption:  `${item.title}`,
            target: this.getContainer(),
            content: `<center><img height="300" width="300" class="card__img" src="${item.photo || 'img/ui/default_pix.jpg'}" alt="Аватар ${item.title}" /></center>`,
            offset: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        });
    }
}

module.exports = Avatar;