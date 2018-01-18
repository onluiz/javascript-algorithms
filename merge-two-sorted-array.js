const merge = function (arr1, arr2) {
  let result = [], i = 0, j = 0

  while (i < arr1.length && j < arr2.length) {

    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }

  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}

const result = merge([1, 5, 7], [3, 4, 6, 8, 11, 14]);
console.log(result)