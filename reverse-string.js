const reverseComplicatedWay = s => [].reduceRight.call(s, (a, b) => a + b)
const resultComplicated = reverseComplicatedWay('hire me Im cool')
console.log('resultComplicated', resultComplicated)

//this one I learnt from a stackoverflow question
const reverse = str => Array.from(str).reverse().join('')
const result = reverse('hire me Im really cool')
console.log('reverse', result)