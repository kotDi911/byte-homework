//1
let userName;
let userSurname;
let userPassword;

let us = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

let name = (str) => {
    let res = /.{1,}/;
    do {
        userName = prompt('name');
        if (!res.test(userName)) {
            alert('Введите name ');
            continue;
        }
        console.log(userName);
    } while (!res.test(userName));
}

let surname = (str) => {
    let res = /.{1,}/;
    do {
        userSurname = prompt('surname');
        if (!res.test(userSurname)) {
            alert('Введите surname');
            continue;
        }
        console.log(userSurname);
    } while (!res.test(userSurname));
}

let password = (str) => {
    let res = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; // добавил проверку на числа
    do {
        userPassword = prompt('Password');
        if (!res.test(userPassword)) {
            alert('Введите Password')
            continue;
        }
        console.log(userPassword);
    } while (!res.test(userPassword));
}

const authorize = () => {

    do {
        name(userName);
        surname(userSurname);
        password(userPassword)
        //let fullName = us(userName) + ' ' + us(userSurname); // вариант 1
        //alert(fullName);                                     // вариант 1
        alert(us(userName) + ' ' + us(userSurname));           // вариант 2
    } while (!name && !surname && !password);

}

authorize();

//2


let a =Number(prompt('Num 1'));
let b =Number(prompt('Num 2'));

const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const rand = randomNumber(a, b);
alert(rand);
