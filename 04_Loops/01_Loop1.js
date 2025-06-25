// for loop 
const array = [1,2,3,4,5,6,7];
for(let i= 0 ; i<array.length ; i++) {
    if(i == 6) {
        // console.log('6 is detected');
        break;
    }
    // console.log(array[i]);
}

//While loop 

let index = 0 
while(index <= 9) {
    console.log(`value is ${index}`);
    index++;
} 

let index2 = 0;
do {
    console.log(`this is the value ${index2}`);
    index2++;
} while(index2 < 10);