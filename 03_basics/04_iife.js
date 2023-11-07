/*  Immediately Invoked Function Expressions (IIFE)
 An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

01. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
02. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // sometimes we need to tell the compiler where the scope has ended and that's why adding explicitly ";"

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sameer')