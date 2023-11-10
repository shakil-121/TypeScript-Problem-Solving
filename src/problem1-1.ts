// Problem 1:

// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number. 

function SquareNumber(num: number|string):any{
    if(typeof num === 'string')
    {
        let stringLength=num.length; 
        return `This String Length is = ${stringLength}`;
    }
    else if(typeof num ==='number'){
        let square=num*num; 
        return `Square of the Number = ${square}`
    } 
    else{
        return console.log('Your Inout is Not a number or String');
    }
} 

const Input=SquareNumber('shakil'); 
console.log(Input); 
