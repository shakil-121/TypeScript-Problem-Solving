
// Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

// After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects.


type Users={
    id:number; 
    name:string;
} 

const users:Users[]=[
    {
     id:12, 
     name:'shakil'
    },
    {
     id:13, 
     name:'rabbi'
    },
    {
     id:14, 
     name:'debu'
    }
] 

const getData=<T,K extends keyof T>(user:T[],key:K):T[K][]=>{
     return user.map((obj)=>obj[key])
} 

console.log('Extracted Data',getData(users,'name'));