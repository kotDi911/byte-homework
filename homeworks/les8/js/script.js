// lesson 8.1

// variant 1
function countTrue(arr){
    let res = 0;
    for (let i of arr){

        if(i === true){

            res = (res || 0 ) + 1;
        }
    }
    console.log(res);
}

/*
// variant 2

function countTrue (arr) {
    let value = {};
    arr.forEach(function (i) {
        value[i] = (value[i] || 0) + 1
    });
    console.log(value[true]);
}
 */

/*
// variant 3

function countTrue (arr) {
let s = 0;
arr.filter((i) => {
  if (i === true) { s++ }
})
console.log(s)
}

 */

countTrue([true, false, false, true, false]); // -> 2

countTrue([false, false, false, false]); // -> 0

countTrue([]); // -> 0

// lesson 8.2

function getOccurrencesCount(arr){
    let count = {};
    arr.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });
    console.log(count);
}

getOccurrencesCount(["a", "v", "a", "b", "b"]);

getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
]);

// lesson 8.3

function findExcess(arr) {
    let outlier;
    let odd = [];
    let even = [];

    arr.forEach(function(i) {
        if (i % 2 === 0) even.push(i);
        else odd.push(i);
    });

    if (odd.length !== 1 && even.length !== 1) {
    } else {
        outlier = (odd.length === 1 ? odd[0] : even[0]);
    }
    console.log(outlier);
}

findExcess([0, 1, 2]); // -> 1
findExcess([1, 2, 3]); // -> 2
findExcess([2, 6, 8, 10, 3]); // -> 3
findExcess([0, 0, 3, 0, 0]); // -> 3
findExcess([1, 1, 0, 1, 1]); // -> 0