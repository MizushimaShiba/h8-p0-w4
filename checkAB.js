function checkAB(num) {
  // you can only write your code here!
  var bool = false
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 'a' && num[i+4] == 'b' && i + 4 < num.length ||
        num[i] == 'b' && num[i+4] == 'a' && i + 4 < num.length) {
        bool = true
        }
      
  }
  return bool
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false