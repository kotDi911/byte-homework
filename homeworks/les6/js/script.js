//1

const autorize = () => {

    let name = () => {
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

    let surName = () => {
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
        // let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        do {
            password = prompt('Password');
            if (password !== 0) {
                if (password.length < 6) {
                    alert('Введите Password');
                    continue;
                }
                console.log(password);
                break;
            }
        } while (!surName || !surName.length < 6);
    }

    do {
        name();
        surName();
        password();
        break;
    } while (!name && !surName && !password)
    {
        alert('OK')
    }

}
autorize();


//2

let a = prompt('enter a');
let b = prompt('enter b');

const numbers = (min, max) => {
    return Math.floor(Math.random() * (b - a) ) + a;
}

console.log('Numbers diapason: 1 - 10');
numbers (a, b);


