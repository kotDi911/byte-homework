//-------------------------- task 1 --------------------------//

const IP_URL = 'https://ipapi.co/json/';
const FLAG_URL = 'https://restcountries.com/v2/name';
const renderIPInfo = (name, capital, currency, flag) => {
    const containerInfo = document.createElement('div');
    const countryName = document.createElement('h1');
    const cityName = document.createElement('h2');
    const countryCurrency = document.createElement('h3');
    const containerImg = document.createElement('div');
    const containerText = document.createElement('div');
    const flagImg = document.createElement('img');

    containerText.classList = 'container_text';
    containerInfo.classList = 'container_info';
    countryName.innerText = name;
    cityName.innerText = capital;
    countryCurrency.innerText = currency;
    flagImg.src = flag;

    containerImg.append(flagImg);
    containerText.append(countryName, cityName, countryCurrency);
    containerInfo.append(containerText, containerImg);
    document.body.prepend(containerInfo)
};
const getCountry = async () => {
    const respIP = await fetch(IP_URL);
    const resultIP = await respIP.json();
    const {country_name, country_capital, currency} = resultIP;
    const respFlag = await fetch(`${FLAG_URL}/${country_name}`);
    const resultFlag = await respFlag.json();
    const [{flag}] = resultFlag;
    renderIPInfo(country_name, country_capital, currency, flag);
};
getCountry();

//-------------------------- task 2 --------------------------//

const BASE_URL = 'https://swapi.dev/api/people';

const renderForm = () => {
    const container = document.createElement('div');
    const containerForm = document.createElement('form');
    const inputId = document.createElement('input');
    const button = document.createElement('button');
    containerForm.classList = 'form';
    container.classList = 'container';
    inputId.classList = 'input';
    inputId.setAttribute('placeholder', 'ID character');
    button.innerText = 'Get character';
    containerForm.append(inputId, button);
    container.append(containerForm);
    document.body.append(container);

    button.addEventListener('click', (event) => {
        event.preventDefault();
        const res = /^\d/;
        let input = inputId.value;
        const updateCard = container.querySelector('.card');
        const errorContainer = document.createElement('p');
        const error = container.querySelector('.error');
        errorContainer.classList = 'error';
        if (res.test(input) && input >= 1 && input < 83) {
            if (error) {
                error.remove();
            }
            button.disabled = true;
            getData(input)
                .then((response) => {
                    if (updateCard) {
                        updateCard.remove()
                    }
                    container.append(renderCard(response.name, input, response.films));
                    button.disabled = false;
                });
            inputId.value = '';

        } else {
            inputId.value = '';
            if (updateCard) {
                updateCard.remove()
            }
            if (error) {
                error.remove();
            }
            container.append(errorContainer);
            errorContainer.innerText = 'Enter only numbers 1-82'
        }
    });
};

renderForm();

const getData = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
};

const createMovieCard = ({title}) => {
    const text = document.createElement('p');
    text.innerText = title;
    return text
};
const renderMovie = (films, container) => {
    const movieCards = films.map(createMovieCard);
    container.append(...movieCards)
};
const getAllFilms = async (id, films, container) => {
    const containerFilms = document.createElement('div');
    const requests = films.map(url => fetch(url));
    const responses = await Promise.all(requests);
    const jsonResp = responses.map(resp => resp.json());
    const filmsResult = await Promise.all(jsonResp);
    containerFilms.classList = 'films';
    renderMovie(filmsResult, containerFilms);
    container.append(containerFilms);
};
const renderCard = (name, id, films) => {
    const containerCard = document.createElement('div');
    const heroName = document.createElement('h3');
    const button = document.createElement('button');
    button.innerText = 'Films';
    button.classList = 'films_btn';
    heroName.innerText = name;
    containerCard.append(heroName, button);
    containerCard.classList = 'card';
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (!containerCard.querySelector('.films')) {
            button.disabled = true;
            getAllFilms(id, films, containerCard).then(() => button.disabled = false )
        }

    });
    return containerCard
};

// const renderFilmsList = async (id, container) => {
//     const response = await fetch(`${BASE_URL}/${id}`);
//     const result = await response.json();
//     const {films} = result;
//     console.log(films)
//     const array = await films.map((film) => {
//         return new Promise((resolve) => {
//             resolve(film)
//         })
//     });
//     console.log(array)
//     Promise.all(array).then((film) => {
//         film.forEach((url) => {
//             filmName(url, container)
//         });
//     })
// };
// const filmName = async (url, container) => {
//     const response = await fetch(url);
//     const result = await response.json();
//     const {title} = result;
//     const text = document.createElement('p');
//     text.innerText = title;
//     container.append(text);
// };