function starFive(num) {
  let result = ''

  for (let i = 0; i < num; i++) {
    let temp = ''
    for (let j = 0; j < num; j++) {
      
      if ( (num + 1) - i == j+1 ) {
        temp += '*'  
      } else {
        temp += ' '
      }
    }
    temp += '\n'
    result += temp
  }
  return result
}

// console.log(starFive(9));
console.log(starFive(5));
// console.log(starFive(2));
// console.log(starFive(3));
// console.log(starFive(1));
// console.log(starFive(4));
console.log(starFive());

