function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  // Pertama scan route nya
  // setiap rute[i] ke rute[i+1] harga dua rebuan
  // penumpang jadikan object
  // index rute asal - index rute tujuan * dua rebu

  let result = []
  let departureCoor = 0
  let arrivalCoor = 0
  let price = 2000

  for (let i = 0; i < arrPenumpang.length; i++) {
    let hike = arrPenumpang[i][0]
    let start = arrPenumpang[i][1]
    let finish = arrPenumpang[i][2]
    for (let j = 0; j < rute.length; j++) {
      if (start == rute[j]) {
        departureCoor = j
      }
      if (finish == rute[j]) {
        arrivalCoor = j
      }

      

    }
    let mole = new Object
    mole.penumpang = hike
    mole.naikDari = start
    mole.tujuan = finish
    mole.bayar = Math.abs(departureCoor - arrivalCoor) * price

    result.push(mole);
    // asasas
  }
  console.log(result);
  
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'], 
  ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]

// if (arrPenumpang[j][1] == rute[i]) {
//   departureCoor = i
// }
// if (arrPenumpang[j][2] == rute[i]) {
//   arrivalCoor = i
// }