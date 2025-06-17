const marvelheroes = ['Batsman' , 'Superman' , 'IronMan'];
const dcHeroes = ['Hulk' , 'SpiderMan' , 'Roger'];
// console.log(marvelheroes);
// marvelheroes.push(...dcHeroes);

// const allHeroes = [...marvelheroes,...dcHeroes];
const allHeroes = marvelheroes.concat(dcHeroes);
// console.log(marvelheroes[3][0]);
// console.log(allHeroes);

// const another_array = [1,2,3,[4,5,6],7,8,[10 , 11,[12,13,14]]];
// let realAnotherArray = another_array.flat(3);
// console.log(another_array);
// console.log(realAnotherArray);

/* console.log(Array.isArray("jitendra"));
console.log(Array.from("jitendra"));
console.log(Array.from({name: "jitendra"})); */

let score1 = 23
let score2 = 25
let score3 = 37

console.log(Array.of(score1 , score2 , score3));





