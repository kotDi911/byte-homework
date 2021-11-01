const optionSelect = ['starships', 'vehicles', 'planets'];

const containerForm = document.createElement('form');
const gridCard = document.createElement('div');
const selectElem = document.createElement('select');
const inputElem = document.createElement('input');
const cardCreateBtn = document.createElement('button');
const alert = document.createElement('p')
const optionElem = optionSelect.map((option) => `<option value="${option}"> ${option} </option>`).join('');

cardCreateBtn.innerText = 'Add Card';
cardCreateBtn.classList.add('create_btn');
inputElem.placeholder = 'ID';
selectElem.innerHTML = optionElem;
gridCard.classList.add('grid');
containerForm.classList.add('form');
alert.classList.add('alert-message');

containerForm.append(selectElem, inputElem, cardCreateBtn);
document.body.append(containerForm);
document.body.append(gridCard);

cardCreateBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    let id = inputElem.value;
    let select = selectElem.value;
    const api = new API();
    if(select === 'vehicles' && id){
        api.getVehicles(id)
            .then(async (response) => {
                try {
                    if(!response.ok){
                        throw new Error(`${select} element with id="${id}" not found`)
                    }else {
                        alert.remove()
                        const request = await response.json();
                        const rend = await new Vehicles(request);
                        rend.render()
                    }
                }catch (err) {
                    containerForm.append(alert);
                    alert.innerText = err;
                    console.log(err)
                }
            });
    }
    if(select === 'starships' && id){
        api.getStarships(id)
            .then(async (response) => {
                try {
                    if(!response.ok){
                        throw new Error(`${select} element with id="${id}" not found`)
                    }else {
                        alert.remove();
                        const request = await response.json();
                        const rend = await new Starships(request);
                        rend.render()
                    }
                }catch (err) {
                    containerForm.append(alert);
                    alert.innerText = err;
                }
            });
    }
    if(select === 'planets' && id){
        api.getPlanet(id)
            .then(async (response) => {
                try {
                    if(!response.ok){
                        throw new Error(`${select} element with id="${id}" not found`)
                    }else {
                        alert.remove();
                        const request = await response.json();
                        const rend = await new Planet(request);
                        rend.render()
                    }
                }catch (err) {
                    containerForm.append(alert);
                    alert.innerText = err;
                }
            });
    }

});

class API {
    constructor() {
        this.baseUrl = 'https://swapi.dev/api';
    }

    async sendRequest(url) {
        const request = await fetch(url);
        if (!response.ok) {
            throw new Error(`Code ${response.status}`)
        }
        const result = await request.json();
        return result
    }

    getVehicles = async (id) => {
        const vehicles = await fetch(`${this.baseUrl}/vehicles/${id}`);
        console.log(vehicles)
        return vehicles
    };
    getStarships = async (id) => {
        const starships = await fetch(`${this.baseUrl}/starships/${id}`);
        return starships
    };
    getPlanet = async (id) => {
        const planet = await fetch(`${this.baseUrl}/planets/${id}`);
        return planet
    }
}


class Card {
    constructor(options) {
        const {title, subtitle, body, footer} = options;
        this.card = document.createElement('div');
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
        this.footer = footer;
        this.cardclas = ''
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
        cardClass.classList.add(`cc_${this.cardclas}`)
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
        this.card.remove()
    }
}

class Vehicles extends Card {
    constructor(option, ...rest) {
        const {name, cost_in_credits, crew, passengers} = option;
        console.log(rest);
        super(rest);
        this.title = name;
        this.subtitle = cost_in_credits;
        this.body = crew;
        this.footer = passengers;
        this.cardclas = 'Vehicle'
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
        this.cardclas = 'Starship'
    }
}

class Planet extends Card {
    constructor(option, ...rest) {
        const {name, climate, terrain, population} = option;
        super(rest);
        this.title = name;
        this.subtitle = climate;
        this.body = terrain;
        this.footer = population;
        this.cardclas = 'Planet'
    }
}
