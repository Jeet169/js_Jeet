const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

/* coding.forEach(function(temp) {
    console.log(temp);
}) */

// coding.forEach((val) => {
//     console.log(`the value is ${val}`);
// })

/* function  printme(item){
    console.log(item);
}

coding.forEach(printme) */

/* coding.forEach( (item , index , arr) => {
    console.log(item , index , arr);
}) */


const myCoding = [
    {
        languageName : "Javascript",
        languageFieldName : "js"
    },
    {
        languageName : "Java",
        languageFieldName : "java"
    },
    {
        languageName : "Perl",
        languageFieldName : "per"
    },
]

myCoding.forEach((item)=> {
    console.log(`--------> ${item.languageName}` , item)
})