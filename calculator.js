let firstValue = 0;
let secondValue = 0;
let calculationResult = 0;

let buttons = document.querySelectorAll('.calculator-button');
let calculatorQuestion = document.querySelector('#calculations-asked');
let calculatorAnswer = document.querySelector('#calculations-answer');

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.classList.add('animation-add');

        setTimeout(() => {
            button.classList.remove('animation-add');
        },500)
        button.textContent = button.textContent.replace(/\s+/g, "");
        
        if (button.textContent === "AC"){
            calculatorQuestion.textContent = "";
            calculatorAnswer.textContent = "";
        }

        else{
        
        calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
        // calculatorQuestion.textContent  =  calculatorQuestion.textContent .replace(/\s+/g, "");
    }
        
    })
}

        