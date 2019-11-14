function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz'
  var indexing = []
  var result = ''
  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (kalimat[i] === alphabet[j])
      indexing.push(j)
    }
  }

  for (var k = 0; k < indexing.length; k++) {
    if (indexing[k] == 26) {
      result += ' ';
    } else if (indexing[k] < 26) {
      result += alphabet[indexing[k] + 27];
    } else if (indexing[k] > 26 && indexing[k] < 53) {
      result += alphabet[indexing[k] - 27];
    } else {
      result += alphabet[indexing[k]];
    }
  }
  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"