let temp = null; 
if(temp === undefined) {
    // console.log('-----------> true');
}

// falsy value 
// false , 0 , null , -0 , NAN , undefined , "" , BigInt 0n

//Truthy Value
// "0" , 'false', " ", [], {}, function() {}

//Nullish Coalesching Operator (??): null  undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
console.log(val1);