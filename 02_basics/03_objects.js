// Singelton -> made only from constructor 
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = { 
    name: "Sameer",
    "full name": "Sameer Choudhary",
    [mySym]: "mykey1",
    age: 23,
    location: "Bengaluru",
    email: "sameer@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sam@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "sam@msft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



