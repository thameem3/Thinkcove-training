function withdrawCash(accountBalance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accountBalance >= 500) 
        {
            resolve("Successfully withdraw");
        } 
      else 
        {
            reject(" Insufficient cash!");
        }
    }, 2000);

  });
}

async function Atm(){
    try{
        const result = await withdrawCash(700);
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }

}

Atm();
