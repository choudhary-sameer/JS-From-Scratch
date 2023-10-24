// function addTwoNumbers(num1, num2){ // num1, num2 are parameters 
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){ // num1, num2 are parameters 
    // let result = num1 + num2
    // return result
    // console.log(num1 + num2) -> will never be executed as it is after return 

    return num1 + num2
}

const result = addTwoNumbers(3, 5) // 3 and 5 are arguments
// console.log("Result: ", result);

function loginUserMessage(userName = "Sam") {
    if (!userName) {
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in!`
}

// console.log(loginUserMessage("Sameer"))
// console.log(loginUserMessage("Sanu"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
} 

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 300, 120, 212, 432))

const user = {
    userName: "Sameer",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} amd price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     userName: "Sam",
//     price: 299
// })

const myArr = [123, 342, 1212, 4332]

function returnSecondVal(getArray) {
    return getArray[1]
}

// console.log(returnSecondVal(myArr))
console.log(returnSecondVal([123, 342, 1212, 4332]))
