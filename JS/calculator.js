const calculator = document.querySelector('.js_calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = calculator.querySelector('.display')



keys.addEventListener('click', event => {
    if(!event.target.matches('span')) return
    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent
    const { type }= key.dataset
    const { previousKeytype } = calculator.dataset
    // is this a number key ?
    if (type ==='number') {
        if (displayValue === '0') {
            display.textContent = keyValue
        } else if(previousKeytype ==='operator') {
            display.textContent = keyValue
        }else {
            display.textContent = displayValue + keyValue
        }   
    }
   
// is this a operator key ?

if (type ==='operator'){
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
    operatorKeys.forEach(el => {
        el.dataset.state= ''});
    key.dataset.state = 'selected'
     
    calculator.dataset.firstNumber = displayValue
    calculator.dataset.operator = key.dataset.key
} 

if (type=== 'equal') {
// performs a calculation

const firstNumber= calculator.dataset.firstNumber
const operator = calculator.dataset.operator
const secondNumber = displayValue
display.textContent = calculate(firstNumber, operator, secondNumber)
}

if(type==='clear'){
    display.textContent = '0'
    delete calculator.dataset.firstNumber
    delete calculator.dataset.operator
}


calculator.dataset.previousKeytype = type
})
























function calculate (firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    let result = '' 
if (operator === 'plus') result = firstNumber + secondNumber  
if (operator === 'moins') result = firstNumber - secondNumber  
if (operator === 'div') result = firstNumber / secondNumber  
if (operator === 'multi') result = firstNumber * secondNumber  
 return result
}




