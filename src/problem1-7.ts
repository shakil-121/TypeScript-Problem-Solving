// Problem 7:

// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.



const findFirstOccurrence=<T>(array:T[],value:T):number=>{ 
    const IndexofArray=array.indexOf(value); 
    return IndexofArray;

}

// Example usage:

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "date";

const targetString2 = "dat";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);

const indexInStrings2 = findFirstOccurrence(strings, targetString2);

console.log("Index Number of number type Array Element: ",indexInNumbers); //output:  1

console.log("Index Number of string type Array Element: ",indexInStrings); //output: 2 

console.log("Index Number of string type Array Element but it not exist: ",indexInStrings2); //output: 2 