// let n = 600851475143;
// let limit = Math.ceil(Math.sqrt(n))
// for (var i = 3; i <= limit; i += 2){
//     while (n % i === 0){
//         n = Math.floor(n / i)
//         limit = Math.ceil(Math.sqrt(n))
//     }
// }
// console.log(n);

/* 
Largest Prime Factor
Adapted from Project Euler Problem 3
The prime factors of 13195 are 5, 7, 13 and 29. Thus, the largest prime factor of 13195 is 29.

What is the largest prime factor of the number 600851475143 ?

*/

// var divisor = 2;
// var number = 600851475143;
// while(number > 1){
//     if(number % divisor === 0){ 
//         number /= divisor;
//     } else {
//         divisor++;
//     }
// }
// console.log(divisor); // the largest prime factor of 600851475143

var x = 600851475143,
    getLargestPrimeFactor = function(n) {
        var largestPrimeFactor,
            factor = 2;

        while (n > 1) {
            if (n % factor === 0) {
                largestPrimeFactor = factor;
                n = n / factor;
                while (n % factor === 0) {
                    n = n / factor;
                }
            }

            factor += (factor === 2) ? 1 : 2;
        }

        return largestPrimeFactor;
    };

console.log(getLargestPrimeFactor(x));