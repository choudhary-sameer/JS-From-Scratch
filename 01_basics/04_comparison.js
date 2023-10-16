// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false -> Avoid this type of comparison
console.log(null == 0); // false -> Avoid
console.log(null >= 0); // true -> Avoid

/* 
The reason is that an equality check == and comparisons <,>,>=,<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why 
          null >= 0 is true and 
          null > 0 is false.
*/

console.log(undefined >= 0); // Avoid

// === Strict Check

console.log("2" === 2);
