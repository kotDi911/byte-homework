//1

const number1 = Number(prompt("enter first number"));
const number2 = Number(prompt("enter next number"));
if (number1>number2){
    alert("Число "+number1+" больше чем "+number2);
}else if (number1<number2){
    alert("Число " +number1+ " меньше чем " +number2);
}else {
    alert("Число "+number1+" равно числу "+number2);
}

//2

    const a = Number(prompt("Enter number"));
    const action = prompt("Enter action (+,-,* or /)");
    const b = Number(prompt("Enter number two"));
    let result;

    switch (action) {
        case '+':
            result = (a + b);
            break;

        case '-':
            result = (a - b);
            break;

        case '*':
            result = (a * b);
            break;

        case '/':
            result = (a / b);
            break;

        default:
            result = "Don't really know..";
    }
    alert(result);

//3

const age = Number(prompt("enter your age"));
if ((12 <= age && age <= 17) || (60 <= age && age <= 80)) {
    let adultPeople = confirm("С вами есть взрослые?");
    if (adultPeople) {
        alert("GO!");
    } else {
        alert("By-by!");
    }
} else {
    alert("GO!");
}
