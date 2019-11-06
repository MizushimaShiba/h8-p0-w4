function angkaPrima(angka) {
    // you can only write your code here!
    for (let index = 2; index < Math.sqrt(angka); index++) {
      if (angka %index == 0) {
        return false
      } 
      
    } return true
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(25));
  console.log(angkaPrima(49));
  console.log(angkaPrima(253));
  // console.log(angkaPrima(121));
  // console.log(angkaPrima(255));
  // console.log(angkaPrima(321));
  // console.log(angkaPrima(1097));
  