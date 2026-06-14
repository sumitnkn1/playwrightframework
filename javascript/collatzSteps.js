let n = 27;
let count = 0;
while(n!=1)
{
  if(n % 2 === 0)
  {
    n = n/2;
    count = count + 1;
  }
  if(n!=1)
  {
    if(n % 2!= 0)
    {
      n = (n*3) +1;
      count = count + 1;
    }
  }
  
}
console.log("Steps: ", count);