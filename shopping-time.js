//  Keys jadikan array
// Uang di loop counter barang 
//  kalo dapet 1 barang maka next item sampe habis
//  Tampilkan barang yang dibeli


function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId == null && money == null) {
    return `Mohon maaf, toko X hanya berlaku untuk member saja`
  }
  var obj = {
    sepatu : 1500000,
    bajuZoro : 500000,
    bajuHN : 250000,
    sweater : 175000,
    casing : 50000,
  }
  var moneyBackup = money
  var keys = Object.keys(obj)
  var barang = []
  if (memberId != '') {
    if (moneyBackup >= 50000) {
      for (var i = 0; i < keys.length; i++) {
        if (money >= obj.sepatu && barang[barang.length - 1] != 'Sepatu') {
          money -= obj.sepatu
          barang.push(`Sepatu`)
        } else if (money >= obj.bajuZoro && barang[barang.length - 1] != 'Baju Zoro') {
          money -= obj.bajuZoro
          barang.push(`Baju Zoro`)
        } else if (money >= obj.bajuHN && barang[barang.length - 1] != 'Baju H&N') {
          money -= obj.bajuHN
          barang.push(`Baju H&N`)
        } else if (money >= obj.sweater && barang[barang.length - 1] != 'Sweater') {
          money -= obj.sweater
          barang.push(`Sweater`)
        } else if (money >= obj.casing && barang[barang.length - 1] != 'Casing') {
          money -= obj.casing
          barang.push(`Casing`)
        }
      }
      let result = { memberId: `${memberId}`,
      money: moneyBackup,
      listPurchased: barang,
      changeMoney: money
      }
      console.log(result);
    } else {
      console.log(`mohon maaf uang tidak cukup`);
    }
  } else {
    console.log('Mohon maaf, toko X hanya berlaku untuk member saja');    
  }

  
  
  
  
  
  
  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 24750000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja