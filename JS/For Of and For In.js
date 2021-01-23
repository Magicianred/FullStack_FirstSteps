const basket = ["apples", "oranges", "grapes"]
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 100
}

basket = {
  0: "apple",
  1: "oranges",
  2: "grapes"
}

//for of
//iteration of arrays and strings
for (item of basket) {
  console.log(item);
}

for (item of "string") {
  console.log(item);
}

//for in
//enumeration in objects, looping to see object properties
for (item in detailedBasket) {
  console.log(item)
}
for (item in basket) {
  console.log(item)
}