function fpb(angka1, angka2) {
    // you can only write your code here!
    var big = 0
    if ((angka1&&angka2) %2 == 0 || (angka1&&angka2) %3 == 0 ) {
        if (angka1 > angka2) {
            big = angka1 % angka2
        }else if (angka2 > angka1) {
            big = angka2 % angka1
        }
    } else {
        return 1
    }
    return big
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1