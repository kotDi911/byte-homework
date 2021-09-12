let buttonPrev = document.createElement('button');
let buttonNext = document.createElement('button');
let buttonsContainer = document.createElement('span');

document.body.append(buttonsContainer);
buttonsContainer.className = 'buttons'
buttonsContainer.append(buttonPrev);
buttonPrev.innerText = 'prev';
buttonsContainer.append(buttonNext);
buttonNext.innerText = 'next';

let index = 0;
const slider = document.querySelectorAll('.slide');

const slideActive = n => {
    for (let slide of slider){
        slide.classList.remove('active')
    }
    slider[n].classList.add('active')
}

const nextSlide = () => {
    if (index === slider.length - 1) {
        index = 0;
        slideActive(index);
    } else {
        index++;
        slideActive(index);
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slider.length - 1;
        slideActive(index);
    } else {
        index--;
        slideActive(index);
    }
}

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);

//setInterval(nextSlide, 2500)