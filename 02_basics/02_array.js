const marvel_Heros=["thor","Ironman","Spiderman"]

const dc_heros=["superman","flash","batman"]

// marvel_Heros.push(dc_heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const allheros=marvel_Heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros=[...marvel_Heros,...dc_heros]
console.log(all_new_heros);

// const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_arr= another_arr.flat(Infinity)
// console.log(real_another_arr);

console.log(Array.isArray("chhavi"));
console.log(Array.from("chhavi"));
console.log(Array.from({name:"chhavi"})); // interseting give the []

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score2,score3));



