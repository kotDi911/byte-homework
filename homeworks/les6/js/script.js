// lesson 6.1

let toUpFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

let getNameOrSurname = (promptText, promptAlert) => {
    let res = /.{1,}/;
    let value;
    do {
        value = prompt(promptText);
        if (!res.test(value)) {
            alert(promptAlert);
            continue;
        }
        console.log('Input text:', value);
    } while (!res.test(value));
    console.log('Finish text:', toUpFirst(value));
    return toUpFirst(value);
}
const name = getNameOrSurname('Введите свое имя', 'Введите имя');
const surname = getNameOrSurname('Введите свою фамилию', 'Введите фамилию');

let password = () => {
    let res = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; // добавил проверку на числа
    let userPassword;
    do {
        userPassword = prompt('Введите свой пароль');
        if (!res.test(userPassword)) {
            alert('Введите корректный пароль не меньше 6 символов, например A5d3fV')
            continue;
        }
        console.log('User password:', userPassword);
    } while (!res.test(userPassword));
}

const authorize = () => {
    const fullName = `${name} ${surname}`;
    password();
    alert(fullName);
}

authorize();

// lesson 6.2


let a = Number(prompt('Num 1'));
let b = Number(prompt('Num 2'));

const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const rand = randomNumber(a, b);
alert(rand);
