//  push produk ke obj
//  siapa yang mengambil barang
//  total barang - pengambilan barang = leftover
//  profit = pengambilan barang * harga


function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!
  if (shoppers.length == 0) {
    return []
  }
  let pot = {}
  // {
    // Sepatu: { 
      // price: 15000000
      // stock: 10
    // } 
  // }

  for (let i = 0; i < listBarang.length; i++) {
    pot[listBarang[i][0]] = {
      price: listBarang[i][1],
      stock: listBarang[i][2]
    }
  }
  
  // let namaShopper = countProfit[0]['name']
  let result = []
  for (let i = 0; i < listBarang.length; i++) {
    let shop = {
      product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0,
    }    
    result.push(shop)
  }
  
  for (let i = 0; i < shoppers.length; i++) {
    if (shoppers[i].product == 'Sepatu Stacattu' && result[0].leftOver >= shoppers[i].amount) {
      result[0].shoppers.push(shoppers[i].name)
      result[0].leftOver -= shoppers[i].amount
      result[0].totalProfit += shoppers[i].amount * listBarang[0][1] 
    } else if (shoppers[i].product == 'Baju Zoro' && result[1].leftOver >= shoppers[i].amount) {
      result[1].shoppers.push(shoppers[i].name)
      result[1].leftOver -= shoppers[i].amount
      result[1].totalProfit += shoppers[i].amount * listBarang[1][1]
    } else if (shoppers[i].product == 'Sweater Uniklooh' && result[2].leftOver >= shoppers[i].amount) {
      result[2].shoppers.push(shoppers[i].name)
      result[2].leftOver -= shoppers[i].amount
      result[2].totalProfit += shoppers[i].amount * listBarang[2][1]
    }
  }
  
    
  return result
}

// { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },


// TEST CASES
console.log(countProfit(
  [
    {
      name: 'Windi', product: 'Sepatu Stacattu', amount: 2
    }, {
      name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3
    }, {
      name: 'Rani', product: 'Sweater Uniklooh', amount: 2
    }
  ]
));
// array of object
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit(
  [{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
   {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
   {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
   {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
   {name: 'Lisa', product: 'Baju Zoro', amount: 1}]
  ));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]