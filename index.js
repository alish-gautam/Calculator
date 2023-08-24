//Getting all the variables required
let number=document.querySelectorAll(".number")
let operation=document.querySelectorAll(".operator")
let display=document.querySelector(".display")
let clear=document.querySelector(".clear")
let equals=document.querySelector(".equals")

// declaring values and operator
let previousNum=""
let myoperator=""
let currentNum=""

// running through every item of the number Array
number.forEach(num=>{
    num.addEventListener("click",(e)=>{
        handleNum(e.target.textContent);
    })
})

// displaying the number on the screen
function handleNum(num){
    currentNum+=num
    display.value=currentNum
}
// running through every item of the operator Array
operation.forEach(item=>{
    item.addEventListener("click",(e)=>{
        handleOperator(e.target.textContent)
        display.value=previousNum+""+myoperator
    })
})
// displaying the operator on the screen and changing current and previous values
function handleOperator(op){
    myoperator=op
    previousNum=currentNum
    currentNum=""
}
equals.addEventListener("click",calculate)
clear.addEventListener("click",()=>{
    previousNum=""
    currentNum=""
    display.value=currentNum
})
function calculate(){
    currentNum=Number(currentNum)
    previousNum=Number(previousNum)
    if(myoperator==="+"){
        // previousNum+=currentNum
        display.value=previousNum+currentNum
        currentNum=display.value
    }
    if(myoperator==="-"){
        display.value=previousNum-currentNum
        currentNum=display.value
    }
    if(myoperator==="/"){
        display.value=previousNum/currentNum
        currentNum=display.value
    }
    if(myoperator==="*"){
        display.value=previousNum*currentNum
        currentNum=display.value
    }
    
}
