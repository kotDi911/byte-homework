let initToSite = 0;
let initElem = 'initToSite'
const updateLocalStorage = (initToSite) =>{
    localStorage.setItem(initElem,JSON.stringify(initToSite))
}
let greeting = document.createElement('h1');;
let renderGreeting = () => {
    greeting.innerText = 'Дооро пожаловать!'
    document.body.append(greeting)
}
let textElem = document.createElement('h2')
let addInit = () =>{
    initToSite++
    updateLocalStorage(initToSite);
}
let init = () => {
    if(localStorage.getItem(initElem)){
        const { initToSite } = JSON.parse(localStorage.getItem(initElem));
        greeting.remove();
        renderGreeting();
        addInit();
    }else {
        alert('hi')
    }
    if(initToSite > 1){
        document.body.append(textElem);
        textElem.innerText = `Вы заходили раз: ${ initToSite }`;
    }
}
init();
updateLocalStorage(initToSite);