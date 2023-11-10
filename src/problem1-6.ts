// Problem 6:

// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message. 

const SumofTheNumbers=(param:unknown)=>{ 
    if(Array.isArray(param) && param.every((singleNumber)=>typeof singleNumber==='number')){
            const total=(param as number[]).reduce((pre,current)=>pre+current,0)  
            console.log(`Total :`, total);
       
    }else{
        console.log('This is not numbers of Array!');
    }

} 

const array=[1,2,3,4,5,6,7]
SumofTheNumbers(array)