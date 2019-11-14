function itungJumlahString(str) {
  var result = { b: null}
  for (var i = 0; i < str.length; i++) {
    if (result[str[i]] == null) {
      result[str[i]] = 1
    } else {
      result[str[i]] += 1
    }
  }
  return result
}






console.log(itungJumlahString('yfdcvbgvvff'));
// {
//   y: 2,
//   f: 3,
//   d: 1,
//   c: 1,
//   v: 4,
//   b: 2,
//   g: 1
// }
