const g = function(a, b) {
  if (!b) {
      return a
  }
  return g(b, a % b)
}

const result = g(15, 38)
console.log(result)