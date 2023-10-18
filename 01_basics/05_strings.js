const name = "Sameer"
const repoCount = 5

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('zeph-yr-com')
// console.log(gameName[3])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('y'))

const newString = gameName.substring(0, 3)
// console.log(newString);

const anotherSting = gameName.slice(-6, 4);
// console.log(anotherSting);

const newStringOne = "    Sameer    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://sameer.com/sameer%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('zeph'))

console.log(gameName.split('-'));
