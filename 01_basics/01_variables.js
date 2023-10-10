const accountId = 13242
let accountEmail = "sam@google.com" 
var accountPassword = "121312"
accountCity = "Bangalore" // Not at all recommended but it's possible
let accountState; // if not initialized, will be returned as "undefined"

// accountId = 2 // not allowed as const can't be re-assigned
accountEmail = "sc@goog.com"
accountPassword = "342345"
accountCity = "Jaipur" 

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);