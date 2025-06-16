const var1 = "5"
console.log(var1.padStart(2, "0")); 


let str = "cat, bat, rat";
let result = str.match(/.at/g);
console.log(result);

/* const paragraph = "I think Ruth's dog is cuter than your dog!";
const str = "cuter";
console.log(paragraph.lastIndexOf(str)) */


/* Repeat
const mood = "Happy! ";
console.log(`i fell ${mood.repeat(3.6)}`); */

/* replace
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace('dog', "cat")) */


/* replace All
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replaceAll('cuter' , "sharpner")); */


//Search
/* const str = "hi this is jitendra kumar , and i ! am passionate about coding and learning new things. I am a software engineer and i love to code."
const regex = "passionate";

console.log(str[str.search(regex)]); // Returns the index of the first match  */

/* 
let var2 = new String("tempo");
if(var2 === "tempo"){
     console.log('true');
}else{
    console.log('false');
    console.log('------->' + var2)
} */


/* if(var3 === "kjfbre"){
     console.log('true');
     console.log('------->' + var3)
}else{
     console.log('false');
} */

/* 
 let obj1 = {
    one : "value1",
    two : "value2",
    three: "value3"
}
console.log(obj1); */



/* let value1 = new String("     Hey      bro    ");
let value2 = String("     Hey bro   ");
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

let var4 = "jitendra";
let str = new String("Jitendra");
const opratingsy = "Mozilla";
const str2 = "The quick brown fox jumps over the lazy dog."

const words = str2.slice(4,9);
const words2 = str2.slice(-5);
console.log(words2);
console.log(words);
 */


/* const words = str2.split("  ");
console.log(words);
console.log("Words in the string:", words[4]); */



/* console.log(opratingsy.substring(2,0));
console.log(opratingsy.substring(3))
console.log(opratingsy.substr(3,4)); */




//toString

/* console.log(str.toString());
console.log(`${new String("hell")}`);   this is the same as
console.log(`${str}`); */


// toUpperCase

/* console.log(`------------>  `, var4.toUpperCase());
console.log(`------------>  `, var4.toLocaleUpperCase());
console.log(`------------>  `, var4.toLowerCase());
console.log(`------------>  `, var4.toLocaleLowerCase()); */



//toWellFormed

/* console.log(typeof strings);
console.log(strings);
for(const str of strings){
    console.log(str.toWellFormed());
} */


//trimStart  // trimEnd // trim

/* if(String.prototype.trimRight.name === "trimEnd"){
    console.log(value1.trimStart());
    console.log(value2.trimEnd());
    console.log(value1.trim());
    console.log(value1.valueOf());
}
 */



//  valueOf
/* console.log(typeof value1);
console.log(value1[0]);
console.log('--------->',value2); */

