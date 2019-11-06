function cariMedian(arr) {
    // you can only write your code here!
    for (let index = 0; index < arr.length; index++) {
        console.log(index);
        
        for (let jindex = 0; jindex < (arr.length-1) - index; jindex++) {
            console.log(index, jindex);
            
            var temp = 0
            if (arr[jindex] > arr[jindex + 1]) {
                temp = arr[jindex]
                arr[jindex] = arr[jindex + 1]
                arr[jindex + 1] = temp                
            }
            
        }
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5