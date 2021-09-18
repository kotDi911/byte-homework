let button = document.createElement('button');
button.innerText = 'button';
let test = document.createElement('span');
test.innerText = 'anything text';
let tooltipElem;

function createTooltip(elem, tooltipText){
    document.body.append(elem);

    elem.onmouseover = function(event) {
        let target = event.target;
        tooltipElem = document.createElement('div');
        document.body.append(tooltipElem);
        tooltipElem.className = 'tooltip';
        tooltipElem.innerText = tooltipText;
        document.body.append(tooltipElem);

        let coords = target.getBoundingClientRect();

        let left =
            coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) {
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }
    };
}
createTooltip(button, 'some text from button');
createTooltip(test, 'test text bla bla bla bla');