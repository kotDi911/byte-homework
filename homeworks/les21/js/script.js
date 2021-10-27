// Реализуйте мини-приложение SWAPI Board для отображения информмационных карточек о звёздных кораблях, планетах и сухопутном транспорте из вселенной Звёздных войн. В реализации вам поможет уже знакомое вам открытое АПИ (swapi).
//     Для реализации необходимо использовать ES6 Class.
//     На странице должна присутвовать форма, в которой присутствует select для выбора типа необходимого вам объекта (звёздный корабль, сухопутное ТС или планета) и input, текстовое поле для ввода айди ресурса.
//     При сабмите формы с выбраным типом и заполенным полем айди, отправляется запрос на сервер, и с полученными данными должна отрисоваться карточка на странице.
//     Для получения данных вам понадобятся следующие эндпоинты
// https://swapi.dev/api/starships/${id} для кораблей
//     https://swapi.dev/api/vehicles/${id} для сухопутного транспорта
//         https://swapi.dev/api/planets/${id} для планет
//             Карточки для каждого типа сущности должна отрисовать уникальные данные. Для звездных кораблей (starships) это:
//
//     название (name)
// модель (model)
// производитель (manufacturer)
// максимальная скорость (max_atmosphering_speed) Для планет:
//     название (name)
// климат (climate)
// поверхность (terrain)
// население (population) Для сухопутного транспорта (vehicles):
// название (name)
// стоимость (cost_in_credits)
// количество человек в команде (crew)
// возможное количество пассажиров (passengers)
// Если неообходимого ресурса с переданным айди не существует, то должен быть показан alert с соответсвующим текстом.
//
//     Каждая карточка должна может быть удалена с доски. Для этого в ней должна присутствовать кнопка-крестик.
//
//     Обязательно должны быть реализованы следующие классы:
//
//     Сard - базовый класс для карточки, cодержит базовую логику отрисовки и удаления карточки.
//     PlanetCard, StarshipCard и VehicleCard которые содержат в себе логику рендера необходимых полей для конкретного типа карточки
// API - класс содержащий в себе логику работы с сервером. Должны быть реальзованы методы для получения каждого ресурса и метод для отправки запроса / обработки ошибок.
//     Необязательное задание продвинутой сложности: При обновлении страницы / закрытии вкладки, карточки должны сохраняться. То есть, при повторном входе пользователь должен увидеть ту же доску с карточками, что и при последнем визите.

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

//card.show();

class Input {
    constructor() {
        const inputElem = document.createElement('input')
    }

}

class Form extends Card {
    constructor(options) {
        const {select, id, ...rest} = options;
        super(rest);
        this.options = options;
        this.BASE_URL = 'https://swapi.dev/api';
        this.selectOption = async (select, id) => {
            const response = await fetch(`${this.BASE_URL}/${select}/${id}`);
            return await response.json();
        };
        this.render()
    }

    render() {
        // super.render();
        const containerForm = document.createElement('form');
        const selectElem = document.createElement('select');
        const inputElem = document.createElement('input');
        const cardCreateBtn = document.createElement('button');
        const optionElem = this.options.map((option) => `<option value="${option}"> ${option} </option>`).join('');

        // const selectOption = async (option, id) => {
        //     const response = await fetch(`${BASE_URL}/${option}/${id}`);
        //     return  await response.json();
        // };

        cardCreateBtn.innerText = 'close';
        inputElem.placeholder = 'ID';
        selectElem.innerHTML = optionElem;
        // console.log(selectElem);

        containerForm.append(selectElem, inputElem, cardCreateBtn);
        document.body.append(containerForm);

        cardCreateBtn.addEventListener('click', async (event) => {
            event.preventDefault();
            let id = inputElem.value;
            let option = selectElem.value;
            let res = {

            };
            this.selectOption(option, id)
            // .then(response => {
            //     console.log(response)
            //     let {name, model, manufacturer, max_atmosphering_speed} = response;
            //     res.title= name;
            //     res.subtitle = model;
            //     res.body = manufacturer;
            //     res.footer = max_atmosphering_speed;
            //     console.log(res)
            //     return res
            // });
            //console.log(res)
            // console.log(id);
            // console.log(option);
            const card = new Card({title:'sdf', fwdf:'sdf', fdeef:'sdf', fwesdf:'sdf'});
            card.render();

        })
    }
}

const form = new Form(['starships', 'vehicles', 'planets']);

// document.body.append(form)

class Vehicles {
    constructor(name) {

    }
}

class Starships {
    constructor(name) {

    }
}

class Planet {
    constructor(name) {

    }
}