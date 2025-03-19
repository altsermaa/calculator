const display = document.getElementById("display");
const numberBtns = document.getElementsByClassName("number");
const addBtn = document.getElementsByClassName("addBtn")[0];
const equalBtn = document.getElementsByClassName("equalBtn")[0];
const minusBtn = document.getElementsByClassName("minusBtn")[0];
const divideBtn = document.getElementsByClassName("divideBtn")[0];
const multiplyBtn = document.getElementsByClassName("multiplyBtn")[0];
const clearBtn = document.getElementsByClassName("clear")[0];
const reverseBtn = document.getElementsByClassName("reverse")[0];
const dotBtn = document.getElementsByClassName("dot")[0];
const percentageBtn = document.getElementsByClassName("percentage")[0];


let operand1 = 0; 
let operand2 = 0; 

let result = 0; 
let operator; 

for ( const btn of numberBtns) {
    btn.addEventListener("click", () => {
        if(display.innerText.startsWith("0", 0)) {
            btn.innerText.replace("0","");
        } else {
            display.innerText += btn.innerText;
        }
    })
};

addBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "+";
    display.innerText = ""; 
});

minusBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "-";
    display.innerText = ""; 
});

divideBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "/";
    display.innerText = ""; 
});

multiplyBtn.addEventListener("click", () => {
    operand1 = display.innerText;
    operator = "*";
    display.innerText = ""; 
});

equalBtn.addEventListener("click", () => {
    operand2 = display.innerText; 
    
        switch (operator) {
            case "+": 
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case "-": 
                result = parseFloat(operand1) - parseFloat(operand2);
                break; 
            case "/": 
                result = parseFloat(operand1) / parseFloat(operand2);
                break;
            case "*": 
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case "*": 
                result = parseFloat(operand1) % parseFloat(operand2);
                break;
        }
        
    display.innerText = result;
});

clearBtn.addEventListener("click", () => {
    display.innerText = ""; 
});

reverseBtn.addEventListener("click", () => {
     
   if(display.innerText.includes("-")){
    display.innerText =  display.innerText.substring(1);
   }else{
    display.innerText = "-"  + display.innerText; 
   };
});

dotBtn.addEventListener("click", () => {
    display.innerText = display.innerText + "."
});

percentageBtn.addEventListener("click", () => {
    let currentValue = parseFloat(operand2);

    if (!isNaN(currentValue)) {
        display.innerText = currentValue / 100;
    }
});
