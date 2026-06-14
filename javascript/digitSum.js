let n = 2345;
let sum = 0;
// Calculate digit sum and print
while (n>0)
{
  let a = n % 10;
  n = Math.floor(n/10);
  sum = sum+a;
}
console.log("Digit sum: ",sum)