// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 8, 14)
// let myCreatedDate = new Date(2026, 8, 14, 15, 55, 43)
// let myCreatedDate = new Date("2026-05-23")
let myCreatedDate = new Date("05-23-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);// give value in milliseconds
// console.log(myCreatedDate.getTime());// give value in milliseconds
// console.log(Math.floor(Date.now()/1000));// give value in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());// month starting from '0' index,you can add 1 in month for correct '1' indexing.
console.log(newDate.getDay());// return day starting from monday.

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})// we can customize locale string further by this function.

