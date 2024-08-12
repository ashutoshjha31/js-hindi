// {a} Primitive    

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt



// {b} Reference (Non primitive)

// Array,Objects,Functions

const heros =["shaktiman","naagraj","doga"]
 let myobj={
    name:"Ashutosh",
    age:21,
}
const myFunction=function(){
    console.log("Hello World");
}

console.log(heros);

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack_heap_memory :-

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubename="hiteshchoudharydotcom"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let UserOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=UserOne

userTwo.email="hitesh@google.com"

console.log(UserOne.email)   //Heap ke andar reference same milta hain dono ko 

