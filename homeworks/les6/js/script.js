//1

const autorize = () => {

    let name = (str) => {
        do {
            name = prompt('name');
            if (name !== 0) {
                if (name.length < 6) {
                    alert('Введите name');
                    continue;
                }
                console.log(name);
                break;
            }
        } while (!name || !name.length < 6);
    }

    let surname = () => {
        do {
            surName = prompt('surName');
            if (surName !== 0) {
                if (surName.length < 6) {
                    alert('Введите surName');
                    continue;
                }
                console.log(surName);
                break;
            }
        } while (!surName || !surName.length < 6);
    }

    let password = () => {
        var res = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        do {
            password = prompt('Password');
            if (password !== 0) {
                if(!res.test(password)){
                    alert('Введите Password')
                    continue;
                }
                console.log(password);
                break;
            }
        } while (!surname);
    }


    do {
        name();
        surname();
        password();
        break;
    } while (!name && !surName && !password)

}
autorize();


//2

let a =Number(prompt('Num 1'));
let b =Number(prompt('Num 2'));

const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const rand = randomNumber(a, b);
alert(rand);