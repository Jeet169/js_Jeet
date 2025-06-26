const Object = {
    js : 'Java Script',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

const array = ['hello' , 'How' , 'are' , 'you'];

const map = new Map();
map.set('a' , 'Alpha');
map.set('b' , 'goat');
map.set('c' , 'Lion');

const json = {
    "js" : "Java Scripr",
    "Cpp" : "C++",
    "rb" : "ruby",
    "swift" : "Swift by Apple"
}


// for(const map1 of map) {
//     console.log(map1);
// }

for(const map1 in map) {
    console.log(map1);
}
/* for(const arr of array){
    console.log(arr);
}
for(const arr in array){
    console.log(array[arr]);
} */

//Object is not iterable in for of loop
/* for(const value of Object) {
    console.log(value);
} */

//Object is iterable in for in loop
// for(const key in Object) {
//     console.log(`${key}  ${Object[key]}`);
// }


