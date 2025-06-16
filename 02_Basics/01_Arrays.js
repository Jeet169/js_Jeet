const arr = [1,2,4,5,6,7,8];
// console.log(arr);

arr.push(9);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.unshift(1);
// console.log(arr);

arr.shift();
// console.log(arr);

// console.log(arr.includes(2));
// console.log(arr.indexOf(6));

//const newArray = arr.join();

// console.log(typeof newArray);

const myNewArray = arr.slice(1,3);
console.log(myNewArray);
console.log(arr);

const myNewArray2 = arr.splice(1,3);
console.log(myNewArray2);
console.log(arr);