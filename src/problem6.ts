// Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.

// Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.

function addNumber(...rest:number[]):number{
    let sum=0; 
    const result=rest.forEach((number)=>{
        sum=sum+number; 
        
    })
    return sum;
}

console.log("Sum =",addNumber(1,2,4,5,7,8,7));