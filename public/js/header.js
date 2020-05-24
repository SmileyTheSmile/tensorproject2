import Component from './component.js';

class Header extends Component {
    render(params){
        return `
        <header>
            <div class="title">
                <img src="${params.imageSrc}" alt="${params.imageDesc}"/>
                <span title="${params.title}">${params.title}</span>
                <p title="${params.description}">"${params.description}"</p>
            </div>
        </header>`;
    }
}

module.exports = Header;