const total = 90

// Calculate hours, minutes, seconds
let hour = Math.floor(total/3600);
let minutes = (Math.floor((total%3600)/60));
let seconds = (Math.floor(total%60));


// Print the result
console.log(`${hour}h ${minutes}m ${seconds}s`);