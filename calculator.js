let buttons = document.querySelectorAll('.calculator-button');
let calculatorQuestion = document.querySelector('#calculations-asked');

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.classList.add('animation-add');

        setTimeout(() => {
            button.classList.remove('animation-add');
        },500)
        
        calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
        calculatorQuestion.textContent  =  calculatorQuestion.textContent .replace(/\s+/g, "");
        
    })
}

        