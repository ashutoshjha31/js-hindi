const arr=[2,4,5,6];
console.log(arr[1]);

//Array methods
arr.push(6)
console.log(arr)
arr.pop(); //removes the last value
arr.unshift(9); //adds an element at the starting
arr.shift(); //removes the first element


console.log(arr.includes(7));// checks whether the given element is present or not and returns the boolean value
console.log(arr.indexOf(6));

const newArr= arr.join()  //returns the string value of array
console.log(arr);
console.log(newArr);

//slice, splice 

console.log("A ", arr);

const myn1=arr.slice(1,3)
console.log(myn1);


const myn2=arr.splice(1,3)
console.log("C ",arr);
console.log(myn2);

