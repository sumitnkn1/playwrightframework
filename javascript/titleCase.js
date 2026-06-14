

const sentence = "hello world";

// Capitalize first letter of each word and print
let words = sentence.split(" ");
let results = [];
for (let i = 0; i< words.length; i++)
{
    let word = words[i];
  result = (word.charAt(0).toUpperCase())+(word.slice(1)).toLowerCase();
  results.push(result);
}

console.log(results.join(" "));