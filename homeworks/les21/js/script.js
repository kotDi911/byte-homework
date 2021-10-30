// Реализуйте мини-приложение SWAPI Board для отображения информмационных карточек о звёздных кораблях, планетах и сухопутном транспорте
// из вселенной Звёздных войн. В реализации вам поможет уже знакомое вам открытое АПИ (swapi).
//     Для реализации необходимо использовать ES6 Class.
//     На странице должна присутвовать форма, в которой присутствует select для выбора типа необходимого вам объекта (звёздный корабль,
//     сухопутное ТС или планета) и input, текстовое поле для ввода айди ресурса.
//     При сабмите формы с выбраным типом и заполенным полем айди, отправляется запрос на сервер, и с полученными данными должна отрисоваться
//     карточка на странице.
//     Для получения данных вам понадобятся следующие эндпоинты
// https://swapi.dev/api/starships/${id} для кораблей
// https://swapi.dev/api/vehicles/${id} для сухопутного транспорта
// https://swapi.dev/api/planets/${id} для планет
// Карточки для каждого типа сущности должна отрисовать уникальные данные.
// Если неообходимого ресурса с переданным айди не существует, то должен быть показан alert с соответсвующим текстом.
//
//     Каждая карточка должна может быть удалена с доски. Для этого в ней должна присутствовать кнопка-крестик.
//
//     Обязательно должны быть реализованы следующие классы:
//
//     Сard - базовый класс для карточки, cодержит базовую логику отрисовки и удаления карточки.
//     PlanetCard, StarshipCard и VehicleCard которые содержат в себе логику рендера необходимых полей для конкретного типа карточки
// API - класс содержащий в себе логику работы с сервером. Должны быть реальзованы методы для получения каждого ресурса и метод для
// отправки запроса / обработки ошибок.
//     Необязательное задание продвинутой сложности: При обновлении страницы / закрытии вкладки, карточки должны сохраняться. То есть,
//     при повторном входе пользователь должен увидеть ту же доску с карточками, что и при последнем визите.

const BASE_URL = 'https://swapi.dev/api';
const optionSelect = ['starships', 'vehicles', 'planets'];

const containerForm = document.createElement('form');
const gridCard = document.createElement('div');
const selectElem = document.createElement('select');
const inputElem = document.createElement('input');
const cardCreateBtn = document.createElement('button');
const optionElem = optionSelect.map((option) => `<option value="${option}"> ${option} </option>`).join('');

cardCreateBtn.innerText = 'Add Card';
cardCreateBtn.classList.add('create_btn');
inputElem.placeholder = 'ID';
selectElem.innerHTML = optionElem;
gridCard.classList.add('grid');
containerForm.classList.add('form');

containerForm.append(selectElem, inputElem, cardCreateBtn);
document.body.append(containerForm);
document.body.append(gridCard);

cardCreateBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let id = inputElem.value;
    let select = selectElem.value;
    let optionsFromAPI = {select, id};
    return new API(optionsFromAPI).data();
});

class API {
    constructor(option) {
        const {select, id} = option;
        this.select = select;
        this.id = id;
        this.selectOption = async (select, id) => {
            // /${select}/${id}
            const request = await fetch(`${BASE_URL}`);
            const response = await request.json();
            // console.log(response)
            // console.log(response[select])
            // const responses = await Promise.all(response);
            // responses.forEach(key => console.log(key))
            // // const requests = response.map(url => fetch(url));
            // console.log(requests)
            console.log(response);
            return response
        };
    }

    data() {
        this.selectOption(this.select, this.id).then(async (response) => {
            const fetchSelect = await fetch(`${response[this.select]}${this.id}`);
            const responses = await fetchSelect.json();
            // console.log(responses)
            // const arraysMap = responses.results.map(arr => arr);
            // const resultsPromise = await Promise.all(arraysMap);
            // console.log(resultsPromise)
            // const result = resultsPromise[this.id];
            console.log(responses);
            switch (this.select) {
                case (this.select = 'planets'):
                    if (responses.detail !== 'Not found' && this.id) {
                        const planet = await new Planet(responses);
                        planet.render();
                    } else {
                        alert(`Card "${this.select}" with id = "${this.id}" not found`)
                    }
                    break;
                case (this.select = 'vehicles'):
                    if (responses.detail !== 'Not found' && this.id) {
                        const vehicles = await new Vehicles(responses);
                        vehicles.render();
                    } else {
                        alert(`Card "${this.select}" with id = "${this.id}" not found`)
                    }
                    break;
                case (this.select = 'starships'):
                    if (responses.detail !== 'Not found' && this.id) {
                        const starships = await new Starships(responses);
                        starships.render();
                    } else {
                        alert(`Card "${this.select}" with id = "${this.id}" not found`)
                    }
                    break
            }
        })

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
    }

    render() {
        const titleElem = document.createElement('h2');
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
        titleElem.innerText = this.title;
        subTitleElem.innerText = this.subtitle;
        bodyElem.innerText = this.body;
        footerElem.innerText = this.footer;
        closeBtn.innerText = 'X';
        this.card.append(titleElem, subTitleElem, bodyElem, footerElem, closeBtn);
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
    }
}
