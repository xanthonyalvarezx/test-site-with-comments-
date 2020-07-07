//create a calculator function whic accepts two numbers and an operator function (a callback)

const add = (x, y) => x + y

function calculator(x, y, equipment) { // callback
    return equipment(x, y)
}
const multiply = (x, y) => x * y

function calculator(x, y, equipment) { // callback
    return equipment(x, y)
}
const divide = (x, y) => x / y

function calculator(x, y, equipment) { // callback
    return equipment(x, y)
}
const subtract = (x, y) => x - y

function calculator(x, y, equipment) { // callback
    return equipment(x, y)
}




const addOutput = calculator(1, 2, add)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide)
const subtractOutput = calculator(1, 2, subtract)
console.log({
    addOutput,
    multiplyOutput,
    divideOutput,
    subtractOutput
})

const addButton = document.querySelector('#addButton')
// 
const multiplyButton = document.querySelector('#multiplyButton')
//
const divideButton = document.querySelector('#divideButton')
//
const subtractButton = document.querySelector('#subtractButton')
//
output = document.querySelector('#output')
let x = document.querySelector('#x')
let y = document.querySelector('#y')
addButton.addEventListener('click', function() {
    console.log( 'clicked')
     x = Number(x.value)
     y = Number(y.value)
    const result = calculator(x,y,add)

output.innerHTML = result

})
multiplyButton.addEventListener('click', function() {
    console.log( 'clicked')
     x = Number(x.value)
     y = Number(y.value)
    let result = calculator(x,y,multiply)

})
divideButton.addEventListener('click', function() {
    console.log( 'clicked')
     x = Number(x.value)
     y = Number(y.value)
    let result = calculator(x,y,divide)
    output.innerHTML = result

})
subtractButton.addEventListener('click', function() {
    console.log( 'clicked')
     x = Number(x.value)
     y = Number(y.value)
    let result = calculator(x,y,subtract)
    output.innerHTML = result

})