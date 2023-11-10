
// Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.

// Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.

let KeyValueArray:[string,any][]=[
    ['id',11],
    ['name','shakil'],
    ['isMarid',false]
] 

function ArrayToObject<T extends string,V>(array:[T,V][]):Record<T,V>{
    const extraxtobject=array.reduce((finlObj,[key,value])=>{
    finlObj[key]=value; 
    return finlObj;

    },{} as Record<T,V>)
    return extraxtobject;
}  


console.log(ArrayToObject(KeyValueArray));








