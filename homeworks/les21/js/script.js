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
const selectElem = document.createElement('select');
const inputElem = document.createElement('input');
const cardCreateBtn = document.createElement('button');
const optionElem = optionSelect.map((option) => `<option value="${option}"> ${option} </option>`).join('');

cardCreateBtn.innerText = 'Add Card';
inputElem.placeholder = 'ID';
selectElem.innerHTML = optionElem;

containerForm.append(selectElem, inputElem, cardCreateBtn);
document.body.append(containerForm);

cardCreateBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let id = inputElem.value;
    let select = selectElem.value;
    let optionsFromAPI = {select, id};
    return new API(optionsFromAPI).data();
});
class API {
    constructor(option){
        const {select, id} = option;
        this.select = select;
        this.id = id;
        this.selectOption = async (select, id) => {
            // /${select}/${id}
            const request = await fetch(`${BASE_URL}/${select}`);
            const response = await request.json();
            console.log(response)
            return response
        };
    }

    data(){
        // this.selectOption = async (select, id) => {
        //     const request = await fetch(`${BASE_URL}/${select}/${id}`);
        //     const response = await request.json();
        //     console.log(response)
        //     return response
        // };
        this.selectOption(this.select, this.id)
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
        //this.render()
        console.log(this)
    }

    render() {
        const titleElem = document.createElement('h1');
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
        closeBtn.innerText = 'close';
        this.card.append(titleElem, subTitleElem, bodyElem, footerElem, closeBtn);
        closeBtn.addEventListener('click', () => this.hide());
        document.body.append(this.card)
    }

    hide() {
        this.card.remove()
    }
}

class Vehicles {
    constructor(option){
        // название (name)
        // стоимость (cost_in_credits)
        // количество человек в команде (crew)
        // возможное количество пассажиров (passengers)
        const {name, cost_in_credits, crew, passengers} = option;
        this.title = name;
        this.subtitle = cost_in_credits;
        this.body = crew;
        this.footer = passengers;
    }
}
class Starships {
    constructor(option) {
        // название (name)
        // модель (model)
        // производитель (manufacturer)
        // максимальная скорость (max_atmosphering_speed)
        const {name, model, manufacturer, max_atmosphering_speed} = option;
        this.title = name;
        this.subtitle = model;
        this.body = manufacturer;
        this.footer = max_atmosphering_speed;
    }
}

class Planet {
    constructor(option) {
        // название (name)
        // климат (climate)
        // поверхность (terrain)
        // население (population)
        const {name, climate, terrain, population} = option;
        this.title = name;
        this.subtitle = climate;
        this.body = terrain;
        this.footer = population;
    }
}