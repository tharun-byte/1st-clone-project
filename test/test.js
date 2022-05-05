function MyFunction() {

    
    var OP = prompt("inputOP");
    var Num1 = parseFloat(prompt("choose you first number: "))
    var Num2 = parseFloat(prompt("choose you second number: "))
    var result = "your result is "
     

    if(OP == "+"){
         console.log(result + Num1 + Num2)
    }

    else if(OP == "-"){
         console.log(result + Num1 - Num2)
    }

    else if(OP == "/") {
        console.log(result + Num1 / Num2)
    }
    
    else if(OP == "*") {
        console.log(result + Num1 * Num2)
    }
}
  

MyFunction();