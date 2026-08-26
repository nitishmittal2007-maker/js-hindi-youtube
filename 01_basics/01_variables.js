const accountId = 309004
let accountEmail = "nitish@gmail.com"
var accountPassword = "94899"
accountCity = "Bathinda"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hsf@gmail.com"
accountPassword = "93400"
accountCity = "Amritsar"

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
