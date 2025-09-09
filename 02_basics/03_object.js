//singleton

//object literals

const mySym =Symbol("key1")
// console.log(typeof mySym);


const JsUser={
    name:"chhavi",
    age:18,
    [mySym]:"myKey1",
    location:"Jaipure",
    email:"chhavi@gmail.com",
    lastLoginDays:["monday","tuesday"],"full name":"chhavi varshney"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email="chhavichatgpt.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser)
JsUser.email="fsdkfnwenf"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




 