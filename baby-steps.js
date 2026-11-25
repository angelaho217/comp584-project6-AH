// variable sum will hold the total of all the numbers
let sum = 0;

// the first 2 elements of process.argv are not numbers, so we skip them
// index 2 is the first number so we start there
for (let i = 2; i < process.argv.length; i++) {
  // command-line arguments are text so convert each one to a number
  sum += Number(process.argv[i]);
}

// print total
console.log(sum);