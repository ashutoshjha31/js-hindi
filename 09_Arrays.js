const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])
const bhai=marvel_heros.concat(dc_heros);
console.log(bhai);

const all_new_heros=[...marvel_heros,...dc_heros]  //spread method acts same as concat

console.log(all_new_heros)

//SUPPOSE
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity) //It adds all the subarray into a single array
console.log(real_another_array);


console.log(Array.isArray("thor"))
console.log(Array.from("marvel_heros")) // converts the string into a array
console.log(Array.from({name:"hitesh"})) //Interesting


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));