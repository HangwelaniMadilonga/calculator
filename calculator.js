let firstValue = 0;
let secondValue = 0;
let calculationResult = 0;
let currentValue = 0;
let currentOperator = "";
let saveSecondValue = false;

const calculatorOperations = ["*","+","-","^","*","÷"];

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
            firstValue = 0;
            secondValue = 0;
            saveSecondValue = false;
        }
        else if(button.textContent === "DEL"){
           // if(button.textContent.slice(-1) =)
           if(calculatorOperations.includes(calculatorQuestion.textContent.slice(-1))){
            firstValue = 0;
            saveSecondValue = false;
           }
            calculatorQuestion.textContent = calculatorQuestion.textContent.slice(0, -1);
        }
        else if(button.textContent === "%"){
            calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
            //console.log(calculatorQuestion.textContent.slice(0,-1));
            
            firstValue = parseFloat(calculatorQuestion.textContent.slice(0,-1))/100;
            console.log(firstValue);
            calculatorQuestion.textContent = firstValue.toString();
        }
        else if(calculatorOperations.includes(button.textContent)){
            for (let i = 0; i < calculatorQuestion.textContent.length; i++) { 
                if(calculatorOperations.includes(calculatorQuestion.textContent[i])){
                    alert("Cannot have two operators consecutively!");
                    return;
                }
            };
        //if the value is not an operator and save
            
            firstValue = parseFloat(calculatorQuestion.textContent);
            currentOperator = button.textContent;
            saveSecondValue = true;
            calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
           }

           else{
            calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
            firstValue = parseFloat(calculatorQuestion.textContent);
            if(saveSecondValue){
                secondValue = calculatorQuestion.textContent.slice(calculatorQuestion.textContent.indexOf(currentOperator) + 1,calculatorQuestion.textContent.length)
            
            }
           }

        
       
        /* 
        make it so that the next number after the operator gets saved as the second number.
        second number should be equal to true
        After every update the calculator shoudl show the answer on the bottom.
        If a person decides to add another operator then the finally answer updates over the question and then the result is displayed
        second number becomes false
        */
     
    })
}

        