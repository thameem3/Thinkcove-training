//template-literals and arrow fuction
const username ={
    name: "Ahamed", age:23, location:"chennai"
}

const greetuser = (username) =>{
    return`hello ${username.name} my age is ${username.age} and currently in ${username.location}`;
  
}
console.log(greetuser(username));


const players = ["Ahamed","Ejazz","jawaher","fazil","navid","Ashok"];
const [captain, vicecaptain ]=players;

console.log("captain",captain);
console.log("vice captain",vicecaptain)

