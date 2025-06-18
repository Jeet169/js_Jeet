const obj1 = {a : "Val1" , b : "Val2"}
const obj2 = {c : "Val1" , d : "Val2"}
const obj3 = {...obj1 , ...obj2};

// console.log(obj1 , obj2);
// const obj3 = Object.assign(obj1 , obj2);
// console.log(obj3);

const user = {
    user1 : {
        Name : "Jitendar",
        Id : 9758348,
        address : "akashdeep"
    },
    user2 : {
        Name : "rohan",
        Id : 94374348,
        address : "shastri nagar"
    },
    user3 : {
        Name : "Ankit",
        Id : 9789348,
        address : "jamapaur"
    }
}

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.call(user));


//Object Dstructuring:

const course = {
    courseName : "js in Hindi",
    price : "999",
    courseInstructor : "Jitendra"
}

const {courseInstructor : coursee} = course

console.log(coursee);


