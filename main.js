const displayText = document.querySelector('#display-text');
const keypadNine = document.querySelector('#keypad-nine');
const keypadEight = document.querySelector('#keypad-eight');
const keypadSeven = document.querySelector('#keypad-seven');
const keypadSix = document.querySelector('#keypad-six');
const keypadFive = document.querySelector('#keypad-five');
const keypadFour = document.querySelector('#keypad-four');
const keypadThree = document.querySelector('#keypad-three');
const keypadTwo = document.querySelector('#keypad-two');
const keypadOne = document.querySelector('#keypad-one');
const keypadZero = document.querySelector('#keypad-zero');
const keypadClear = document.querySelector('#keypad-clear');
const keypadPlus = document.querySelector('#keypad-plus');  
const keypadMinus = document.querySelector('#keypad-minus');
const keypadMultiply = document.querySelector('#keypad-multiply'); 
const keypadDivide = document.querySelector('#keypad-divide');
const keypadEquals = document.querySelector('#keypad-equals');


  
let num1 = 0
let num2 = 0
let opr = ""
let firstPress = false


let currentDisplaytext = [];
const operators = ["*", "+", "-", "/"];

function populateScreen(char) {
    /* Handles cases where an operator is pressed after calculating the result */
    if (firstPress) {
        num1 = Number(displayText.textContent)
        opr = char
        currentDisplaytext = []
        firstPress = false
        return
    }
    /* Handles the usual first number is entered for first time */
    if (!operators.includes(char)) {
        currentDisplaytext.push(char);
    }
    else{
        /* Handles the usual case where one operator is used*/
        if (opr === "" ){
            num1 = Number(currentDisplaytext.join(""))
            opr = char
            currentDisplaytext = []
            return
        }

        /* Handles cases where one or more operators are used*/
        else{
            num2 = Number(currentDisplaytext.join("")) || 0;
            console.log(`Calculating: ${num1} ${opr} ${num2}`);  

            let result = operate();
            
            displayText.textContent = result;
            
            num1 = result;
            opr = char;
            currentDisplaytext = [];
            return;
        }
    }
    
    displayText.textContent = currentDisplaytext.join("") || "0"; 
    console.log("char pressed" + char)
}

function clearScreen(){
    num1 = 0, num2 = 0
    opr = ""
    currentDisplaytext = []
    firstPress = false
    displayText.textContent = "0"
}

function multiply(num1,num2){
    return num1 * num2
}

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(){
    num2 = Number(currentDisplaytext.join(""))
    console.log(`Num1: ${num1}, Num2: ${num2}, Opr: ${opr}`)
    let result = 0
    if (opr === "*"){
       result =  multiply(num1,num2)
    }
    else if (opr === "+"){
        result = add(num1,num2)
    }
    else if (opr === "-"){
        result = subtract(num1,num2)
    }
    else if (opr === "/"){
        result = divide(num1,num2)
    }
    displayText.textContent = result
    num1 = 0, num2 = 0
    opr = ""
    currentDisplaytext = []
    firstPress = true

    return result

}


keypadNine.addEventListener("click", () => populateScreen("9"));
keypadEight.addEventListener("click", () => populateScreen("8"));
keypadSeven.addEventListener("click", () => populateScreen("7"));
keypadSix.addEventListener("click", () => populateScreen("6"));
keypadFive.addEventListener("click", () => populateScreen("5"));
keypadFour.addEventListener("click", () => populateScreen("4"));
keypadThree.addEventListener("click", () => populateScreen("3"));
keypadTwo.addEventListener("click", () => populateScreen("2"));
keypadOne.addEventListener("click", () => populateScreen("1"));
keypadZero.addEventListener("click", () => populateScreen("0"));  
keypadClear.addEventListener("click", () => clearScreen());
keypadMultiply.addEventListener("click", () => populateScreen("*"));
keypadDivide.addEventListener("click", () => populateScreen("/"));
keypadPlus.addEventListener("click", () => populateScreen("+"));
keypadMinus.addEventListener("click", () => populateScreen("-"));
keypadEquals.addEventListener("click", () => operate());