const dc_heros = ['batman', 'superman', 'flash']
const marvel_heros = ["spiderman", "ironman", "thor"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(all_new_heros);


const another_Array = [1, 2, 3, [4, 5, 6], 7, [7, [8, 9]]]

const real_another_array = another_Array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Sameer"))
console.log(Array.from("Sameer"))
console.log(Array.from({name: "Sameer"})) // interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

