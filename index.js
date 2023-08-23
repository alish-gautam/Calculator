//Getting all the variables required
let number=document.querySelectorAll(".number")
let operator=document.querySelectorAll(".operator")
let display=document.querySelector(".display")
let clear=document.querySelector(".clear")
let equals=document.querySelector(".equals")

// declaring values and operator
let firstNum=""
let myoperator=""
let secondNum=""

// function for when a number button is clicked..it takes first and second number
number.forEach((num)=>{
    num.addEventListener("click",()=>{
        if(myoperator==""){
            firstNum+=num.value
            display.value=firstNum
        }
        else{
            secondNum+=num.value
            display.value=secondNum
            
        }
        
        
    })
})
// getting the operator clicked and displaying it 
operator.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (myoperator !== "") {
            operate(firstNum, myoperator, secondNum); // Calculate the previous operation
            firstNum = display.value; // Update firstNum with the result
            secondNum = ""; // Reset secondNum for a new operand
        }
        myoperator=item.innerHTML
        display.value=myoperator

    })
})

function operate(firstNum,myoperator,secondNum){
    if(myoperator=="+"){
        if( secondNum===""){
            secondNum="0"
        }
        let result=add(parseFloat(firstNum),parseFloat(secondNum))
        display.value=result
        firstNum = result;
    }
    if(myoperator=="*"){
        if(secondNum===""){
            secondNum="1"
        }
        let result=multiply(parseFloat(firstNum),parseFloat(secondNum))
        display.value=result
        firstNum = result;
    }
   
}

// function to calculate result when = button is clicked
equals.addEventListener("click",()=>{
    operate(firstNum,myoperator,secondNum)
    
})
//add function to add the values
function add(first,second){
    return first + second
}
function multiply(first,second){
    return first*second
}

// clearing the display
clear.addEventListener("click",()=>display.value="")

