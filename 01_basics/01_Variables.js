/*
Variables are Containers for Storing Data

JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

const accountId = 15487936;
let accountEmail = "NoobCoder@google.com"; // Fake email 
var accountPassword = "789012";
accountCity = "Delhi";
let accountState; // undefined

// accountId = 2   //const can't be chanagd 

accountEmail = "nci@nci.com";
accountPassword = "456123";
acountCity = "Uttarpradesh";


console.log(accountId); // cntrl + ` to open terminal

/*
Prefer not to use var because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

