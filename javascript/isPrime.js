const n = 4;
let isPrime = true;
// Check if prime and print
for (let i = 2; i<=Math.sqrt(n); i++)
{
  if(n % i === 0)
  {
    isPrime = false
    break;
  }
  
}

if(isPrime)
{
  console.log("Prime");
}
else
{
  console.log("Not prime");
}