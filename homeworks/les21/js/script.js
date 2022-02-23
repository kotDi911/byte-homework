const optionSelect = ['starships', 'vehicles', 'planets'];

const BASE_URL = 'https://swapi.dev/api';

const containerForm = document.createElement('form');
const gridCard = document.createElement('div');
const selectElem = document.createElement('select');
const inputElem = document.createElement('input');
const cardCreateBtn = document.createElement('button');
const alert = document.createElement('p');
const optionElem = optionSelect.map((option) => `<option value="${option}"> ${option} </option>`).join('');

cardCreateBtn.innerText = 'Add Card';
cardCreateBtn.classList.add('create_btn');
inputElem.placeholder = 'ID';
selectElem.innerHTML = optionElem;
gridCard.classList.add('grid');
containerForm.classList.add('form');
alert.classList.add('alert-message');
cardCreateBtn.setAttribute('type', 'submit');

containerForm.append(selectElem, inputElem, cardCreateBtn);
document.body.append(containerForm);
document.body.append(gridCard);

const renderShip = async (select, arg) => {
    if (select === 'starships') {
        const rend = await new Starships(arg);
        rend.render();
    }
};

const renderVehicles = async (select, arg) => {
    if (select === 'vehicles') {
        const rend = await new Vehicles(arg);
        rend.render()
    }
};

const renderPlanets = async (select, arg) => {
    if (select === 'planets') {
        const rend = await new Planets(arg);
        rend.render()
    }
};

const handleFormSubmit = (select, id, url) => {
    const api = new API().sendRequest(url);

    api.then(async (response) => {
        if (!id) {
            containerForm.append(alert);
            alert.innerText = 'ENTER ID'
        } else {
            alert.remove();
            renderShip(select, response);
            renderVehicles(select, response);
            renderPlanets(select, response);
            let add = {card: select, code: `${select}_${id}`, ...response};
            storageCard[storageCard.length] = add
        }
        localStorage.setItem('aaa', JSON.stringify(storageCard))
    })
        .catch(err => {
            containerForm.append(alert);
            alert.innerText = `${err}. Card "${select}" by id="${id}" not found`;
            console.log(err)
        })
};

let storageCard = [];

cardCreateBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const id = inputElem.value;
    const select = selectElem.value;
    const url = `${BASE_URL}/${select}/${id}`;
    handleFormSubmit(select, id, url);
});

class API {
    constructor() {
        this.baseUrl = 'https://swapi.dev/api';
    }

    async sendRequest(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Code ${response.status}`)
        }
        const result = await response.json();
        return result
    }
}


class Card {
    constructor(options) {
        const {title, subtitle, body, footer, id} = options;
        this.card = document.createElement('div');
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
        this.footer = footer;
        this.id = id;
        this.code = `${this.cardclas}_${this.id}`;
        this.cardclas = '';
    }

    render() {
        const cardClass = document.createElement('h2');
        const titleElem = document.createElement('h3');
        const subTitleElem = document.createElement('h4');
        const bodyElem = document.createElement('p');
        const footerElem = document.createElement('p');
        const closeBtn = document.createElement('button');
        this.card.classList.add('card');
        titleElem.classList.add('card_title');
        subTitleElem.classList.add('card_subtitle');
        bodyElem.classList.add('card_body');
        footerElem.classList.add('card_footer');
        closeBtn.classList.add('close_btn');
        cardClass.classList.add(`cc_${this.cardclas}`);
        titleElem.innerText = this.title;
        subTitleElem.innerText = this.subtitle;
        bodyElem.innerText = this.body;
        footerElem.innerText = this.footer;
        cardClass.innerHTML = `${this.cardclas} <hr>`;
        closeBtn.innerText = 'X';
        this.card.append(cardClass, titleElem, subTitleElem, bodyElem, footerElem, closeBtn);
        closeBtn.addEventListener('click', () => this.hide());
        gridCard.append(this.card);
    }

    hide() {
        this.card.remove();
        localStorage.setItem('aaa', JSON.stringify(storageCard))
    }
}

class Vehicles extends Card {
    constructor(option, ...rest) {
        const {name, cost_in_credits, crew, passengers} = option;
        super(rest);
        this.title = name;
        this.subtitle = cost_in_credits;
        this.body = crew;
        this.footer = passengers;
        this.cardclas = 'Vehicle';
    }
}

class Starships extends Card {
    constructor(option, ...rest) {
        const {name, model, manufacturer, max_atmosphering_speed} = option;
        super(rest);
        this.title = name;
        this.subtitle = model;
        this.body = manufacturer;
        this.footer = max_atmosphering_speed;
        this.cardclas = 'Starship';
    }
}

class Planets extends Card {
    constructor(option, ...rest) {
        const {name, climate, terrain, population} = option;
        super(rest);
        this.title = name;
        this.subtitle = climate;
        this.body = terrain;
        this.footer = population;
        this.cardclas = 'Planet';
        // this.id = this.cardclas + '_' + id;
    }
}

const renderStorage = () => {
    let card = localStorage.getItem('aaa');

    if (card) {
        let cards = JSON.parse(card);
        console.log(cards)
        cards.forEach((elem) => {
            renderShip(elem.card, elem);
            renderVehicles(elem.card, elem);
            renderPlanets(elem.card, elem)
        });
        return storageCard = [...cards]
    }
};
renderStorage();