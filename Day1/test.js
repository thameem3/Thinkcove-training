const username="Ahamed";

function login(user){
    if(user===username){
        console.log("successfully login");
    }
    else{
        console.log("invalid login");
    }
}
login("Ahamed");


const name = "Ahamed";

const login = (a) => {
  if (a === name) {
    return "successfully";
  } else {
    return "invalid";
  }
};

console.log(login("Ahamed")); 
