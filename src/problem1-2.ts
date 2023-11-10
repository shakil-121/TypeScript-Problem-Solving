// Problem 2:

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors. 

type Address={
    city:string; 
    street:string;
}

interface Person{
    address?:Address,
    phone?:number,
} 

const getAddressCity=(value:Person):string|any=>{
      return value.address?.city;
} 

const person1:Person={
   address:{
    city:'Dhaka', 
    street:'Kafrul Thana road'
   }, 
   phone:14578
} 

console.log(getAddressCity(person1));

