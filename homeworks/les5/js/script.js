//1

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const autorize = () => {
    let userPassword;
    let userLogin;

    for (let i = 3; i > 0; i--){
        alert('Осталось ' + i + ' попытки');
        while (i) {
            userLogin = prompt('Login');
            if (!userLogin){
                alert('Введите логин');
                continue;
            }
            userPassword = prompt('Password');
            if (!userPassword){
                alert('Введите пароль');
                continue;
            }
            break;
        }
        if (userPassword !== PASSWORD || userLogin !== LOGIN){
            alert('Данные неверны!');
        }
        else {
            alert('Welcome!');
            break;
        }
    }
}
autorize();

//2

const numbers = (start, finish) => {
    Outer:
    for (let i = start; i <= finish; i++) {
        for (let j = 2; j < i; j++){
            if (i % j ===0){
                continue Outer;
            }
        }
        console.log(i);
    }
}

console.log('Numbers diapason: 1 - 10');
numbers (1, 10);
console.log('Numbers diapason: 20 - 100');
numbers (20, 100);
