
const firstName = "Kai";
const lastName = "Tove";

// Create username (lowercase, no space)
const name1 = firstName.toString();
const name2 = lastName.toString()
console.log(`Username: ${firstName.toLowerCase()+lastName.toLowerCase()}`);
// Create initials (uppercase first letters)
console.log(`Initials: ${firstName[0].toUpperCase()+lastName[0].toUpperCase()}`)


//======================

const score = 79;

// Print the grade
if(score>=90)
{
  console.log("A");
}
else if(score<=89 && score>=80)
{
  console.log("B");
}
else if(score<=79 && score>=70)
{
  console.log("C");
}
else if(score<=69 && score>=60)
{
  console.log("D");
}
else
{
  console.log("F");
}

//============================

const n = 5;

// Print multiplication table
for (let i = 1; i<=10; i++)
{
  console.log(`${n}`+ " x " +`${i}` +' = '+ n*i);
}


//=========================

const shape = "rectangle";

// Read measurements and calculate area

Math.e

switch (shape){
        
case "rectangle":
        console.log("Area:", (lines(1).trim()*lines(2).trim()).toFixed(2));
        break;
case traingle:
			  console.log("Area:", (lines(1).trim()*lines(2).trim()/2).toFixed(2));
				break;
case circle:
        console.log("Area:",Math.pi*(lines(1).trim()*lines(1).trim())).toFixed(2);
    		break;
default:
       console.log("Invalid shape");
 }