function cariModus(arr) {
  // you can only write your code here!
  var tampung = {}
  for (let i = 0; i < arr.length; i++) {
    if (!tampung[arr[i]]) {
      tampung[arr[i]] = 1 
    } else {
      tampung[arr[i]] ++
    }
  }
  let highKey = null
  let highVal = 0 
  for (let key in tampung) {
    // console.log(tampung[key]);
    if (tampung[key] > highVal) {
      highKey = key
      highVal = tampung[key]
    }
  }
  if (highVal == 1 || highVal == arr.length) {
    return -1
  }
  return highKey
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// let obj = {
//   1: 10,
//   2: 20,
//   3: 30,

// }
// console.log(obj[2]);
