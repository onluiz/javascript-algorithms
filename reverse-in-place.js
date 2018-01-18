const reverseInPlace = (string) => {
  return [...string].reverse().join('')
}

const result = reverseInPlace('Brazil')
console.log(result)