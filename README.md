
## Interview Questions:

#### What are some benefits of using TypeScript over JavaScript in a project?

Answer: TypeScript provide many benefits - type safety , run time error handalling , enhenced readability , large-scal application build for proper maintanence also it provide us to switch JS any version . 

#### What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

Answer : Optional chaing (?.)==> it's use for safely access nested properties , When undefined or null provides error it's use this case for avoiding this error also we use this when any value is not req to declaration and it's do not show any error. 
example: const person={
    name?:'shakil'
} 

const person1=person?.name;


Nullish coalescing(??)==> we use it when any variable provide null or undefined value then it's set a default value for show. 
example:  
const value: string | null | undefined = null; 
const result = value ?? 'Default Value';

### How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?

Ans: In TS we handle asynchronous operations in callbacks, Promises, and async/await syntax .  

Some Advantages of using async/await over callbacks or Promises 

==> Debugging: when we write a code with async/await is easier to debug compared to callbacks or complex Promise chains.

==> Readability and Maintainability: Async-await syntax provides cleaner and more readable code compared to callbacks or complex Promise chains.

==>Sequentiality And Chaining: Async/await allows chaining of asynchronous operations in a more sequential and synchronous-like way, making code logic clearer  

### How can you use TypeScript's enums, and what are their advantages?. 
Ans: TypeScript's enums allow us to define a set of named constants , provide way to work with a group of related constants . 

Advantages
==========
=> Type Safety: Enums prevents assigning invalid values which are not part of the defined set of constants.

=> IntelliSense: Using enums in TypeScript provides excellent autocompletion & IntelliSense support in modern code editors or IDEs, making it easier to work with enum values.

=> Maintainability: As the codebase grows, enums improve maintainability by centralizing the definition of related constants, ensuring consistency and avoid duplication of values across the code so that code can be more maintainable and more readable .

### Explain the role of type guards in TypeScript and provide an example of a custom type guard.
Ans: Type guards in Typescript are used to narrow down the type of a variable within a certain block of code, allowing TypeScript to understand more about the type within that specific context.Type guard is particularly helpful when dealing with union types. 

example: class Car {
    drive() {
        console.log("Car is being driven.");
    }
}

class Bicycle {
    ride() {
        console.log("Bicycle is being ridden.");
    }
}

function isCarOrBicycle(vehicle: Car | Bicycle): vehicle is Car {
    return vehicle instanceof Car;
}

function travel(vehicle: Car | Bicycle) {
    if (isCarOrBicycle(vehicle)) {
        vehicle.drive(); // TypeScript understands 'vehicle' is a 'Car'
    } else {
        vehicle.ride(); // TypeScript understands 'vehicle' is a 'Bicycle'
    }
}

### Can you give an example of how to use "readonly" properties in TypeScript?
Ans : type Car={
        readonly name:'TYoata'; 
        model:string;
} 

### Explain what a union type is in TypeScript and provide an example of its usage. 
Ans: union type allows a variable to have multiple types. 

example : type ForntendDeveloper='WordpressDeveloper'|'ReactDeveloper';  
type BackendDeveloper='MERNStackDeveloper'|'PHPDeveloper'; 

type NewDeveloper= ForntendDeveloper | BackendDeveloper; 

let juniourDeveloper:NewDeveloper='ReactDeveloper';

type user={
    name:string,
    email?:string, 
    phone:number|string,
    designation:NewDeveloper, 
    Gender:'Male'|'Female'|'Custom',

}

let user1:user={
    name:'Shakil', 
    phone:'01871426050', 
    designation:'MERNStackDeveloper',
    Gender:'Male'
} 
