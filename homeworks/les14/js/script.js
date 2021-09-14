
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
    let submitBtn = document.createElement("button");

    arr.forEach((items) => {

        let labelElement = document.createElement("label");
        labelElement.innerText = items.label;
        labelElement.setAttribute('for', items.name );

        let containerElement = document.createElement("div");
        containerElement.append(labelElement);

        if (items.element === 'text') {
            let inputElement = document.createElement("input");
            inputElement.innerText = items.name;
            inputElement.setAttribute('type', items.element);
            inputElement.setAttribute('name', items.name);
            inputElement.setAttribute('id', items.name);
            labelElement.style = 'width: 60px;' + 'display: inline-block;';
            containerElement.append(inputElement);
            containerElement.style = ''
        }
        if (items.element === 'select') {
            let option = items.options.map((key) => `<option value="${key.value}"> ${key.text} </option>`).join('');
            let select = document.createElement('select');
            select.innerHTML = option;
            select.setAttribute('name', items.name);
            select.setAttribute('id', items.name);
            containerElement.append(select);
        }
        containerForm.append(containerElement);
    });
    console.log(containerForm);
    submitBtn.innerText = 'submit';
    containerForm.append(submitBtn);
    document.body.append(containerForm);

    let convertDataToObj = (formData) => {
        let formValues = {};

        for(let pair of formData){
            formValues[pair[0]] = pair[1]
        }
        return formValues;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData(event.target);
        let prepareData = convertDataToObj(formData);
        console.log(`formValues`, prepareData);
    };
    containerForm.addEventListener("submit", handleSubmit);
};

formAuthor(formConfig);