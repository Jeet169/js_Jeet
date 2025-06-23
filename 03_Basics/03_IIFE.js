//Immediately Invoked Function Expression

(function Chai(){
    console.log('--------Hello');
})();


( ()=>{
    console.log('--------hello 2');
})()

 let x = (function() { return typeof arguments; })
 (); 
 console.log(x);