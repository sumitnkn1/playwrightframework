const word = "hello";

// Check if palindrome and print
const str = word.split("").reverse().join("");
console.log(str);
if(word === str)
{
  console.log("Yes");
}
else
{
  console.log("No");
}