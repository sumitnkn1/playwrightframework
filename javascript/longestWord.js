const sentence = "a bb ccc bb a";
let results= [];
words = sentence.split(" ");
//console.log(words);
let longestWord = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log(longestWord);
