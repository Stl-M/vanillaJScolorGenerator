const addBtn = document.getElementById('increment');
const subBtn = document.getElementById('decrement');
const display = document.getElementById('counterDisplay');

let equals = 0;
const limit = 20;

const updateDisplay = () => {
    if(equals > limit){
        equals = limit
    }
    if(equals < 0) {
        equals = 0;
    }
    display.textContent = equals;

    document.body.style.setProperty('background-color', `rgba(${(equals / limit) * 255}, 255, 30, 0.4)`);
    
}

addBtn.addEventListener('click', () => {
    equals += 1;
    updateDisplay();
});

subBtn.addEventListener('click', () => {
    equals -= 1;
    updateDisplay();
});