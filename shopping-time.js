//  Keys jadikan array
// Uang di loop counter barang 
//  kalo dapet 1 barang maka next item sampe habis
//  Tampilkan barang yang dibeli


function shoppingTime(memberId, money) {
  // you can only write your code here!
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
        var counter = true
        if (money >= obj.sepatu && counter == true) {
          money -= obj.sepatu
          barang.push(`Sepatu`)
          counter = false
        } else if (money >= obj.bajuZoro && counter == true) {
          money -= obj.bajuZoro
          barang.push(`Baju Zoro`)
          counter = false
        } else if (money >= obj.bajuHN && counter == true) {
          money -= obj.bajuHN
          barang.push(`Baju H&N`)
          counter = false
        } else if (money >= obj.sweater && counter == true) {
          money -= obj.sweater
          barang.push(`Sweater`)
          counter = false
        } else if (money >= obj.casing && counter == true) {
          money -= obj.casing
          barang.push(`Casing`)
          counter = false
        }
        var result = { memberId: `${memberId}`,
        money: moneyBackup,
        listPurchased: barang,
        changeMoney: money
        }  
      }
    } else {
      console.log(`mohon maaf uang tidak cukup`);
    }
  } else {
    console.log('Mohon maaf, toko X hanya berlaku untuk member saja');    
  }

  
  
  
  
  console.log(result);
  
  
  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
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
// console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
// console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja