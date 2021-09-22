const renderGreeting = () => {
    const greeting = document.createElement('h1');
    greeting.innerText = 'Дооро пожаловать!';
    document.body.append(greeting)
};
const enteringToSite = () => {
    const initElem = 'initToSite';
    if(!localStorage.getItem(initElem)) {
        localStorage.setItem(initElem, JSON.stringify(1));
    } else {
        localStorage.initToSite++;
    }
    renderGreeting();
    if(localStorage.initToSite > 1) {
        let textElem = document.createElement('h2');
        document.body.append(textElem);
        textElem.innerText = `Вы заходили раз: ${localStorage.initToSite}`;
    }
};
enteringToSite();