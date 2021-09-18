// -------------------------------- task 1 ---------------------------------- //
const response = {
    data: [
        {
            username: "samuel",
            is_active: true,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
            username: "john",
            is_active: false,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
            username: "peter",
            is_active: false,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
    ],
    meta: {
        paging: {
            current: 1,
            next: 2,
            prev: null,
            total: 14,
            per_page: 3,
        },
    },
};
const { meta: { paging: { total} } } = response
//console.log(total)

const { data } = response,
    [firstElem] = data,
    { is_active: isActive } = firstElem;
//console.log(firstElem)
//console.log(isActive)

// ------------------------------- task 2 -------------------------------- //

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
};

const { name, surname, ...parametrs } = user;

//console.log(name);
//console.log(surname);
//console.log(parametrs);

// -------------------------------- task 3 -------------------------------- //

//const max = (a, b) => {
//  return a > b ? a : b;
//};

const max1 = (...number) => {
    let max = number[0];
    number.forEach((i) => {
        if(i > max) max = i
    });
    return max;
};
max1(79, 456, 34, 650, 365);
//console.log(max1(79, 456, 650, 365));

// -------------------------------- task 4 -------------------------------- //

const createMessage = (author, text, reciever, time ) => {
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage("Peter", "Hello", "Sam", new Date());
console.log(message);

const createMessage1 = ({ author = 'Guest', text, reciever, time } ) => {
    return `From ${author} to ${reciever}: ${text} (${time})`;
};
// после выполнения этого задания, функция должна коректно работать с таким аргументом
const message1 = createMessage1({
    reciever: "John",
    text: "Hi!",
});
console.log(message1);

// --------------------------------  task 5  -------------------------------- //
// -------------------------------- task 5.1 -------------------------------- //
let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
// для строки str результат должен быть следующий:
// [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]

const regexp = /\w+\d+\w+/g;
let result = str.match(regexp);
console.log(result);

// -------------------------------- task 5.2 -------------------------------- //

let form = document.getElementById('form');
let input = document.getElementById('input');
let label = document.getElementById('label');

const SITE_REGEXP = /([A-z]+)(\.)([a-z]{2,})/;

const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = input;
    console.log(value);
    if(!SITE_REGEXP.test(value)){
        label.style = 'background: #ff1313ad';
        label.innerText = 'is BAD';
    }else{
        label.style = 'background: #00ff0085'
        label.innerText = 'is Ok';
    }
};
form.addEventListener("submit", handleSubmit);

// -------------------------------- task 5.3 -------------------------------- //
const regexp1 = /^[\d]{12,}$/;
let string = '12345678910054546545654';
let result1 = string.match(regexp1);
console.log(result1);
string = 'sa41414141414141';
console.log(string.match(regexp1));
string = '41414141414141dfs';
console.log(string.match(regexp1));
string = '41414141414141';
console.log(string.match(regexp1));

