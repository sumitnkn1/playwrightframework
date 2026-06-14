const text = 'aabbccddefsg'
let results = [];

for (let i = 0; i< text.length; i++)
{
  if(!results.includes(text[i]))
  {
   results.push(text[i]);
  }
}

console.log(results.join(""))