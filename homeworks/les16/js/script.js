let renderGreeting = () => {
    let greeting = document.createElement('h1');
    greeting.innerText = 'Дооро пожаловать!'
    document.body.append(greeting)
}
renderGreeting()
