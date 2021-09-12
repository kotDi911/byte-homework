const formConfig = [
    {
        element: "text",
        name: "login",
        label: "Логин",
    },
    {
        element: "text",
        name: "age",
        label: "Возраст",
    },
    {
        element: "select",
        name: "language",
        label: "Выберите язык программирования",
        options: [
            {
                text: "JavaScript",
                value: "js",
            },
            {
                text: "Java",
                value: "java",
            },
            {
                text: "Python",
                value: "python",
            },
        ],
    },
];

const formAuthor = (arr) => {

    let containerForm = document.createElement("form");
    let inputElement;
    let labelElement;
    let containerElement;
    let option = '';
    let select = document.createElement('select');
    let submitBtn = document.createElement("button");

    let getListHtml = (items) => {

        for (let key of items.options) {
            option += `<option value="${key.value}"> ${key.text} </option>`;
        }

        if (option) {
            select.innerHTML = option;
        }
        return select;
    };

    arr.forEach((items) => {
        if (items.element === 'text') {
            inputElement = `<input type="text" name="${items.name}" id="${items.name}">`;
            labelElement = `<label for="${items.name}"> ${items.label} </label>`;
            containerElement = document.createElement("div");
            containerElement.innerHTML = labelElement + inputElement;
            containerForm.append(containerElement);
        }
        if (items.element === 'select') {
            labelElement = `<label for="${items.name}"> ${items.label} </label>`;
            containerElement = document.createElement("div");
            containerElement.innerHTML = labelElement;
            containerElement.append(getListHtml(items));
            select.setAttribute('name', items.name);
            select.setAttribute('id', items.name);
            containerForm.append(containerElement);
        }
    });

    submitBtn.innerText = 'submit';
    containerForm.append(submitBtn);
    document.body.append(containerForm);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValues = [{
        login: login.value,
        age: age.value,
        select: language.value,
    }];

        console.log(formValues);
    };
    containerForm.addEventListener("submit", handleSubmit);
};

formAuthor(formConfig);