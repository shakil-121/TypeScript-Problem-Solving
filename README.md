
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