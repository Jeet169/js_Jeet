//for of Loop 
const arr = [1,2,3,4,5,6,7];

for(const num of arr) {
    // console.log(num);
}


const greeting = 'Hello Good morning';
for(const greet of greeting) {
    if(greet == ' ') {
        // console.log(`null value occurs ${greet}`);
        break;
    }
    // console.log(`The value is ${greet}`);
}

//Maps
const map1 = new Map();   // Map is also has a object  
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
map1.set("d", 4);
map1.set("e", 5);

// console.log(map1.get("a"));

map1.set("e" , 9876);

// console.log(map1.get('e'))

/* console.log(map1.size);
console.log(map1.delete("e"));
console.log(map1.get('e'))
console.log(map1.size); */


const map = new Map()
map.set('IN' , "India");
map.set('USA' , "United States America");
map.set('Fr' , "France");
map.set('GER' , "Germany");

// console.log(map);

for(const place of map){
    // console.log(place);
}

for(const [key , value] of map) {
    console.log(key +' '+ value);
}

const myobj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// Objects are not iterable
// for(const [key , value] of myobj) {
//     console.log(key , ':-' , value);
// }




