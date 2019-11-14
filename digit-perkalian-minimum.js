function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var temp = ''

  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka; j++ ) {
      if (i * j == angka && i < 10) {
        if (temp.length == 0) {
          temp = String(i) + String(j)
        }
        if (temp.length > (String(i)+String(j)).length) {
          temp = String(i) + String(j)
        }
      }
    }
  }
  return temp.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2