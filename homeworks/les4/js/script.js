// 1
const num1 = 10;
const num2 = 22;
const num3 = 105;
const num4 = 224;

function plus(a, b) {
    return a + b;
}
plus(num1, num2);
plus(num3, num4);

console.log(plus(num1, num2));
console.log(plus(num3, num4));


/*function plus1(a, b) {
    return a + b;
}*/
const plus1 = (a, b) => a + b;
plus1(num1, num2);
plus1(num3, num4);

console.log(plus1(num1, num2));
console.log(plus1(num3, num4));

// 2

function nameAndAge(){
    const name = prompt("enter your name");
    const age = Number(prompt("enter yor age"));

    if(age > 30){
        alert("Здавствуйте" + " " + name);
    }
    else {
        alert("Привет" + " " + name);
    }
}

nameAndAge();

// 3

let x = prompt("x?");
let n;

function pow(x, n = 2){
    return Math.pow(x, n);
}

pow();

console.log(pow(x,n));