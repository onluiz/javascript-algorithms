var numbers = [2,3,4,5,5,4];

let result = numbers.filter((value, index) => {
  return numbers.indexOf(value) == index
})

//from airbnb guide https://github.com/airbnb/javascript#arrays
//spreads are cool!
numbers = [...result]

console.log(numbers)