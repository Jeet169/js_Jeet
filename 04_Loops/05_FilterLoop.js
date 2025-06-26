const Myveges = ['potato' , 'tomato' , 'ladyfingure' , 'radish' , 'Carrot'];

const value = Myveges.forEach( (val) => {
    // console.log(val);
    return val
});

// console.log(value);


const Mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const newNum  = Mynum.filter((num) => num < 8 )
console.log(newNum); */

const newNum = Mynum.filter((num) => {
    return num >5
})

// console.log(newNum);

const newVeges  = Myveges.filter((veges) => veges === 'potato' )
// console.log(newVeges);


// for Each

const newNums = [];

Mynum.forEach((num)=> {
    if(num > 7) {
        newNums.push(num);
    }
})
console.log(newNums);

const book = [
    { title : 'Book one' , genre : 'Fiction' , publish : 1980 , edition : 2010 },
    { title : 'Book two' , genre : 'Non Fiction' , publish : 1985 , edition : 2012 },
    { title : 'Book three' , genre : 'History' , publish : 1990 , edition : 2011 },
    { title : 'Book four' , genre : 'Science' , publish : 1991 , edition : 2014 },
    { title : 'Book five' , genre : 'Fiction' , publish : 1995 , edition : 2015 },
    { title : 'Book six' , genre : 'Non Fiction' , publish : 1998 , edition : 2016 },
    { title : 'Book seven' , genre : 'Science' , publish : 1992 , edition : 2017 },
    { title : 'Book eight' , genre : 'History' , publish : 1997 , edition : 2018 },
    { title : 'Book nine' , genre : 'Fiction' , publish : 1986 , edition : 2019 },
]