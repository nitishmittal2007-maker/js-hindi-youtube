// array

const myarray = [1, 2, 3, 4, 5, 6]// resizable and can contain elements of  multiple data types.
const myHeroes = ["Shaktiman", "naagraj"]

const myarray2 = new Array(1, 2, 3, 4)
// copy operations create shallow copies(copy whose properties share same reference), rather than deep copies(do not share the same reference).

// console.log(myarray[1]);

// Array methods

// myarray.push(6)// add element in array
// myarray.pop()// remove last element from the array
// myarray.unshift(9)// add element in starting 
// myarray.shift()// remove element from starting

// console.log(myarray.includes(9));// tells whether element is in array or not.
// console.log(myarray.indexOf(3));// give the index of the element in array.

const newarray = myarray.join()// converts whole array into string

// slice, splice