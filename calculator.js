let firstValue = 0;
let secondValue = 0;
let calculationResult = 0;

const calculatorOperations = ["*","+","-","%","^","x","%","="];

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
        else if(button.textContent === "DEL"){
            calculatorQuestion.textContent = calculatorQuestion.textContent.slice(0, -1);;
        }

        else{
        
        calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
        // calculatorQuestion.textContent  =  calculatorQuestion.textContent .replace(/\s+/g, "");
    }
        //I need to iterate through the string and then from there I am going to seperate them.
        //then after that i calculate using javascript
        //Problem will be when it is too long and then we sepeprate them.
        //we can divide them accordint to the array.turn them into numbers and then make it an expression.
        /* 
        5+6-23%2

        we can just cause the
        
        
        */
     
    })
}

        