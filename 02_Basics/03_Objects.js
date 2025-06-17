//Singleton
//Object Create

//Object Litteral
let sym = Symbol("hey");
// console.log(typeof sym);
const obj1 = {
    [sym]  : "ncjkbdcb",
    name : "jitendra",
    key2 : "Value2",
    key3 : "Value3",
    key4 : ["aa" , "bb" , "cc" , "dd"],
    key5 : {
        key1 : "val1" ,
        key2 : "val2",
        key3 : {
            I : "Jieten",
            II : "Prateek",
            III : "Sorav",
            rollNo : [1 , 2 , 3]
        }
    },
}


// Object.freeze(obj1);
obj1.key1 = "terr"
// console.log(obj1);


obj1.greetings = function() {
    console.log('Hi how are you brother');
}

obj1.greetingsTwo = function() {
    console.log(`Hi how are you brother, ${this.name}`);
}

console.log(obj1.greetings());
console.log(obj1.greetingsTwo());