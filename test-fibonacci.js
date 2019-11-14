function fibonacci(num) {
  // var temp = ''
  var resultBefore = 0
  var resultAfter = 0
  var result = ''
  while (resultAfter < num) {

    // result += resultAfter + resultBefore
    if (!resultBefore) {
      resultBefore++
      result += resultAfter + resultBefore
      // result += 0
      // resultBefore = resultAfter + resultBefore
    } else {
      result += resultAfter + resultBefore
      // if (resultBefore == 0) {
      //   resultBefore = 1
      // } else {
      //   resultBefore = resultAfter
      // }
      // resultBefore = resultAfter
      resultAfter = resultAfter + resultBefore
    }
    // count++

  }
  return result
}

console.log(fibonacci(20));



// if (' ') {
//   console.log(`run`);
  
// }

// console.log(`run`);
