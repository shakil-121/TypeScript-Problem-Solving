// Problem 5:

// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types. 

interface Car{ 
    make:string; 
    model:string; 
    year:number;
} 
interface Driver{ 
    name:string; 
    licenseNumber:number;
} 

const combinedProperties=(obj1:Car,obj2:Driver):Car & Driver=>{
    return {...obj1,...obj2}
}
 
//for example 
const car1:Car={
    make:'Toyota',
    model:'x-corola', 
    year:2006, 
 
} 

const Driver1:Driver ={
    name:'Shakil', 
    licenseNumber:158496,
} 

console.log(combinedProperties(car1, Driver1));
