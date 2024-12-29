const faultyCalaculator=()=>{
    num1=parseInt(prompt("Enter The Number 1:"));
    op=prompt("Enter the Operation:");
    num2=parseInt(prompt("Enter the Number 2:"));

    switch(op){
        case "+":
            console.log("The Substraction is",num1-num2)
            break;
        case "-":
            console.log("The Multiplication is ",num1*num2);
            break;
        case "*":
            console.log("The Division is ",num1/num2);
            break;
        case "/":
            console.log("the Addition is ",num1+num2);
            break;
        default:
            console.log("The Invalid Input!!!")
    }


}

faultyCalaculator();