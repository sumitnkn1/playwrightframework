
const a = 1;
const b = 2;
const c = 10;

// Classify and print

if (a + b <= c || a + c <= b || b + c <= a) console.log("Not a triangle");
else if (a === b && b === c) console.log("Equilateral");
else if (a === b || b === c || a === c) console.log("Isosceles");
else console.log("Scalene");