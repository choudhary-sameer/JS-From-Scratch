// var c = 230
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner:", a);
}

// scope is different for browser and vs code

// console.log(a);
// console.log(b)
// console.log(c)

function one(){
  const username = "hitesh"

  function two(){
      const website = "youtube"
      console.log(username);
  }
  // console.log(website);

   two()

}

// one()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ INTERESTING ++++++++++++++++++


console.log(addone(5))

function addone(num){
  return num + 1
}


addTwo(5) // will give an error
const addTwo = function(num){ // This is an expression
  return num + 2
}

// To Read : https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
