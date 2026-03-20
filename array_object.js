let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); 
console.log(fruits.length); 

fruits.push("Mango");
console.log(fruits); 
fruits.pop();
console.log(fruits);
fruits.unshift("Strawberry");
console.log(fruits); 
fruits.shift();
console.log(fruits);

let index = fruits.indexOf("Banana");
if (index !== -1) {
  console.log(`Found ${fruits[index]} at index ${index}`);
} else {
  console.log("Banana not found");
}

fruits.forEach(fruit => {
  console.log(fruit);
});