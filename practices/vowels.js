const vowels="aeiouAEIOU";
let username="Ahamed";
let count = 0;

for(let i=0; i< username.length; i++)
{
    if(vowels.includes(username[i]))
    {
        count++
    }
}

console.log(count)
