// lesson 6.1

let us = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

let name = () => {
    let res = /.{1,}/;
    let userName = "";
    do {
        userName = prompt('Введите свое имя');
        if (!res.test(userName)) {
            alert('Введите имя');
            continue;
        }
        console.log(userName);
    } while (!res.test(userName));

    return us(userName);
}

let surname = () => {
    let res = /.{1,}/;
    let userSurname;
    do {
        userSurname = prompt('Введите свою фамилию');
        if (!res.test(userSurname)) {
            alert('Введите фамилию');
            continue;
        }
        console.log(userSurname);
    } while (!res.test(userSurname));
    return us(userSurname);
}

let password = () => {
    let res = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; // добавил проверку на числа
    let userPassword;
    do {
        userPassword = prompt('Введите свой пароль');
        if (!res.test(userPassword)) {
            alert('Введите корректный пароль не меньше 6 символов, например A5d3fV')
            continue;
        }
        console.log(userPassword);
    } while (!res.test(userPassword));
}

const authorize = () => {
    let fullName = name() + ' ' + surname();
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
