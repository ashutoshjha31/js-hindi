const name="ashutosh"
const repoCount=50

console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${name} and my repo count is ${repoCount}`);

const gameName=new String("hites-hhc")

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

let newstring=gameName.substring(0,4)
console.log(newstring);

const anotherString=gameName.slice(-8,5) // negative value lets the counting start from backward
console.log(anotherString+"  123");

const newstringOne="   hitesh   "
console.log(newstringOne)
console.log(newstringOne.trim())  // trims the starting and end space

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-')) // replaces the character in javascript

console.log(url.includes('sundar')) // checks whether a particular value is present in the string or not

console.log(gameName.split('-'));   //splits the string from a specified character and returns an array