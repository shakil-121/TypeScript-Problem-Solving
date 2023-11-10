// Problem 3:

// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat." 

class Cat{
  
}  

const isCat=(animal:Cat):animal is Cat=>{
   return animal instanceof Cat;
} 

const checkCat=(animal:Cat)=>{
    if(isCat(animal)){
        return console.log("yes, it's a cat.");
    } 
    else{
        return console.log("no, it's not a cat.");
    }
}

//for example
const myCat=new Cat();   
const notCat='dog'

checkCat(myCat)






