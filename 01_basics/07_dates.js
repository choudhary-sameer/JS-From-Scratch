// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 12) 
// let myCreatedDate = new Date(2023, 0, 13, 5, 6) 
// let myCreatedDate = new Date("2023-01-13") 
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // output in miliseconds
// console.log(myCreatedDate.getTime());
// Always do comparisons in miliseconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
