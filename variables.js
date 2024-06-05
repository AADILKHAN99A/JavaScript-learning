const accountId = 123;
let accountEmail = "asdf@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";

// accountId = 2            // not allowed

accountEmail = "ad@.com";
accountPassword = "212312";
accountCity = "bikaner";

let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
console.log(accountState);



