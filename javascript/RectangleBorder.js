const width = 3;
const height = 3;

// Print the rectangle border
for (let i = 1; i<=height; i++)
{
  let str = ""
  for(let j= 1; j<=width; j++)
  {
   
    if(i===1 || i===height)
    {
    str = str+"*"  
   
    }
    else
    {
      if(j>1 && j<width)
      {
        str = str+" ";
      }
      else
      {
        str = str+"*";
      }
      
    }
  }
   console.log(str);
}