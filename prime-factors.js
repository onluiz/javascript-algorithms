const findPrimeFactors = (num) => {
  let arr = [];

  for (var i = 2; i < num; i++) {
    let isPrime

    if (num % i === 0) {
      isPrime = true;
      
      for (var j = 2; j <= i; j++) {
        if (i % j === 0) {
          isPrime == false;
        }
      }
    } 
    
    if (isPrime) {
        arr.push(i)
    }

  }
  return arr
}

const primeFactors = findPrimeFactors(543)
console.log(primeFactors)