const text = "aeiouEiu"
const str = text.toLowerCase();
const vowels = "aeiou";
let count = 0;
for (let i = 0; i<=str.length;i++)
{
  if(vowels.includes(str[i]))
  {
    count = count + 1
  }
}
console.log("Vowels: ", count);