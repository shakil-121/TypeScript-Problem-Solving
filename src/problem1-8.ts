// Problem 8:

// Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost. 

interface Product{
    name:string; 
    price:number;
    quantity:number;
} 

const calculateTotalCost=(cart:Product[]):number=>{ 
    let totalAmmount=0 
    for(const item of cart){
       totalAmmount+=item.price*item.quantity;
    }
    return totalAmmount;
} 

// Example usage:
const MyCart: Product[] = [
    { name: 'T-shirt', price: 500, quantity: 3 },
    { name: 'Watch', price: 2500, quantity: 1 },
    { name: 'Shoes', price: 1500, quantity: 2 }
];

const totalCost = calculateTotalCost(MyCart);
console.log('Total cost of items in the shopping cart is = ', totalCost ," BDT ");
