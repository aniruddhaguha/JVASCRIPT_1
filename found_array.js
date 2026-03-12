const items = ["pen", "book", "pencil", "notebook"];
const target = "markers";
let found = false;

for (let i = 0; i < items.length; i++) {
  if (items[i] === target) {
    found = true;
  }
}

console.log("Found:", found);
