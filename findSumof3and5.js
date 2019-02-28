//Find the sum of all the multiples of 3 or 5 below 1000.
// Do the maths
for(
    var sum = 0, i = 1;
    i < 1000;
    !(i % 3 && i % 5) && (sum += i), i++
);
// Log the result
console.log(sum);