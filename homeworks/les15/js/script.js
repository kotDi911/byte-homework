// task 15.1

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
const { meta } = response,
    { paging } = meta,
    { total } = paging;
//console.log(total)

const { data } = response,
    [firstElem] = data,
    { is_active: isActive } = firstElem;
//console.log(firstElem)
//console.log(isActive)

// task 15.2
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

// task 15.3
