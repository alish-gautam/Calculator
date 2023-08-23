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

number.forEach((num)=>{
    num.addEventListener("click",()=>{
        if(myoperator==""){
            firstNum=num.innerHTML
            display.value+=firstNum
        }
        else{
            secondNum=num.innerHTML
            display.value+=secondNum
            
        }
        
        
    })
})
operator.forEach((item)=>{
    item.addEventListener("click",()=>{
        myoperator=item.innerHTML
        display.value+=myoperator

    })
})
function operate(firstNum,myoperator,secondNum){
    if(myoperator=="+"){
        if( secondNum===""){
            secondNum="0"
        }
        let result=add(parseFloat(firstNum),parseFloat(secondNum))
        display.value=result
       
    }
   
}


equals.addEventListener("click",()=>{
    operate(firstNum,myoperator,secondNum)
    
})

function add(first,second){
    return first + second
}

