const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// Logs the name of each item in the 'items' array to the console. //
function logItemNames() {
  items.forEach((item) => console.log(item.name));
}

// Finds and returns an item from the 'items' array based on its ID. //
function findItemById(id) {
  return items.find((item) => item.id === id);
}

// Returns a new array where the names of the items are capitalized. //
function capitalizeNames() {
  return items.map((item) => ({ ...item, name: item.name.toUpperCase() }));
}

// Calculates and returns the total inventory across all items. //
function calculateTotalInventory() {
  return items.reduce((acc, item) => acc + item.inventory, 0);
}

// Calculates and returns the total price of all items in inventory. //
function calculateAllInventoryPrice() {
  return items.reduce((acc, item) => acc + item.price * item.inventory, 0);
}

// Finds an item by its name and returns its price. //
function getItemPriceByName(name) {
  const foundItem = items.find((item) => item.name === name);
  return foundItem ? foundItem.price : "Item not found";
}

// Filters and returns items that belong to a specific category. //
function filterItemsByCategoryId(categoryId) {
  return items.filter((item) => item.categoryId === categoryId);
}

// Logs the names of items that are in the cart. //
function logCartItems() {
  cart.forEach((id) => {
    const item = findItemById(Number(id));
    if (item) console.log(item.name);
  });
}

// Calculates and returns the total price of items in the cart. // 
function calculateTotalCartPrice() {
  return cart.reduce((acc, id) => {
    const item = findItemById(Number(id));
    return item ? acc + item.price : acc;
  }, 0);
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

const ids = prompt(
  "enter numbers separated by commas for the ids of the items you want to add to your cart",
  "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(Number(id)));
console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(
  `The item with id ${itemId} is  ${JSON.stringify(
    findItemById(+itemId),
    null,
    2
  )}`
);
console.log(
  "We can map over an array and return a new array with the names capitalized like so: ",
  capitalizeNames()
);
console.log(
  "The total inventory of all grocery items is: ",
  calculateTotalInventory()
);
console.log(
  "The total price of all items in inventory is: ",
  calculateAllInventoryPrice()
);

const itemToFind = prompt(
  "Enter the name of an item to find the price of",
  "apple"
);
console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
  "Enter a number between 1-4 to filter only items with that categoryId",
  2
);
console.log(
  `The items in category ${categoryId} are: `,
  filterItemsByCategoryId(+categoryId)
);

console.log("Cart items: ");
logCartItems();

console.log(
  `The total price of the items in your cart is: `,
  calculateTotalCartPrice()
);
