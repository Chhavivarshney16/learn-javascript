// primitive datatype 
// 7 types ->String,number ,boolean,null,undefined,Symbol,Bigint


// javasript is an dynamic datatype (donot required to define the type of variable like int a=10 )
// const score =100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;

// const id =Symbol('123')
// const anotherid =Symbol('123')
// console.log(id===anotherid);
// console.log(anotherid);

// const bigNunber =3435122345464n;

// Refrence()/Nonprimitive datatype ->Array , Object ,Functions
const heros=["chhavi","tiya","umang"]
console.log(typeof  heros)

let myobj={
    name:"chhavi",
    age:22,
}
console.log(typeof myobj)

const myFunction =function(){
    console.log("HELLO WORLD");
}
console.log(typeof myFunction)