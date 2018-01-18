const swapNormalWay = (a, b) => {
  let tmp = a
  a = b
  b = tmp

  return {a, b}
}

const resultNormalWay = swapNormalWay(1, 2)
console.log('resultNormalWay', resultNormalWay)

const swapEs6Way = (a, b) => {
  [b, a] = [a, b]
  return {a, b}
}
const resultEs6Way = swapEs6Way(1, 2)
console.log('resultEs6Way', resultEs6Way)