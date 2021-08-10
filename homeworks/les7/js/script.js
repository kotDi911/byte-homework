// lesson 7.1

let getTimeTable = () => {

    const timeTable = {};
    let task;
    let time;
    do {
        task = prompt('what task you will do?');
        if (task === null) {
            break;
        }
        time = prompt('when will you do the task?');
        if (time !== null) {
            timeTable[time] = task;
        }

    } while (time !== null);

    return timeTable;
}

console.log(getTimeTable());

// lesson 7.2

const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};
const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let salary in salaries) {
        total += Number(salaries[salary]);
    }
    return total.toFixed(2);
}
const totalResult = getSalariesTotal(salaries);

console.log(totalResult);
