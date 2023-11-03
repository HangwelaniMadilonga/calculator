let firstValue = 0;
let secondValue = 0;
let calculationResult = 0;
let currentValue = 0;
let currentOperator = "";

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
        }
        else if(button.textContent === "DEL"){
           // if(button.textContent.slice(-1) =)
           if(calculatorOperations.includes(button.textContent.slice(-1))){
            firstValue = 0;
           }
            calculatorQuestion.textContent = calculatorQuestion.textContent.slice(0, -1);
        }
        else if(button.textContent === "%"){
            calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
            //console.log(calculatorQuestion.textContent.slice(0,-1));
            
            firstValue = parseInt(calculatorQuestion.textContent.slice(0,-1))/100;
            console.log(firstValue);
            calculatorQuestion.textContent = firstValue.toString();
        }


        else{
            if(calculatorOperations.includes(button.textContent)){
                for (let i = 0; i < calculatorQuestion.textContent.length; i++) { 
                    if(calculatorOperations.includes(calculatorQuestion.textContent[i])){
                        alert("Cannot have two operators consecutively!");
                        return;
                    }
                };
                
                firstValue = calculatorQuestion.textContent;
                currentOperator = button.textContent;
                calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;
               }
        else{
        calculatorQuestion.textContent = calculatorQuestion.textContent + button.textContent;}
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

        