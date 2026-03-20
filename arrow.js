let users = [
  { name: "Ridoy", age: 22 },
  { name: "Sami", age: 17 }
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);