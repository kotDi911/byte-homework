// lesson 9.1

const data = [
    {
        name: "John",
        age: 24,
        position: "senior",
        isActive: false,
    },
    {
        name: "Peter",
        age: 33,
        position: "middle",
        isActive: false,
    },
    {
        name: "Sam",
        age: 29,
        position: "junior",
        isActive: true,
    },
    {
        name: "Mary",
        age: 24,
        position: "middle",
        isActive: false,
    },
    {
        name: "Steve",
        age: 23,
        position: "middle",
        isActive: true,
    },
    {
        name: "Kate",
        age: 31,
        position: "middle",
        isActive: false,
    },
    {
        name: "Sally",
        age: 19,
        position: "junior",
        isActive: false,
    },
    {
        name: "Jack",
        age: 19,
        position: "middle",
        isActive: true,
    },
];

// v 1.1

const filterData = (arr, filter) => {
    return arr.filter(item =>
        Object.keys(filter).every(key =>
            item[key] === filter[key]
        )
    );
};

// v 1.2

// const filterData = (arr, filter) => {
//     return arr.filter(function(items){
//         for (let key in filter) {
//             if(items[key] !== filter[key]){
//                 return false;
//             }
//         }
//         return true;
//     });
// };

filterData(data, {age: 19, position: "junior"});
console.log(filterData(data, {age: 19, position: "junior"}));

filterData(data, {age: 24});
console.log(filterData(data, {age: 24}))

// lesson 9.2

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownForEach = (array, logger) => {
    for (let index in array) {
        let element = array[index];
        logger(element, index, array);
    }
};

const onMap = (arr, increment) => {
    let result = [];
    for (let key in arr) {
        let number = arr[key];
        number = increment(number);
        result.push(number);
    }
    return result;
};

const ownFilter = (arr, isNegative) => {
    let result = [];
    for (let key in arr) {
        let number = arr[key];
        if (isNegative(number)) {
            result.push(number)
        }
    }
    return result;
};

ownForEach([1, 2, 3], logger);

onMap([1, 2, 3, 4, 5], increment);
console.log(onMap([1, 2, 3, 4, 5], increment));

ownFilter([-2, 4, -1, 6, -5], isNegative);
console.log(ownFilter([-2, 4, -1, 6, -5], isNegative));