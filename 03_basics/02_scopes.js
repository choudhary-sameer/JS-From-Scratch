// var c = 230
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner:", a);
}

// scope is different for browser and vs code

console.log(a);
// console.log(b)
// console.log(c)
