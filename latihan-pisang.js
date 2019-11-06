var array = ['pisang','mangga','jeruk','salak','duren']

// looping array per index
for (let index = 0; index < array.length; index++) {
    // index = index
    // arr[index] = value
    let temp = []

    // looping array per value
    for (let jindex = 0; jindex < array[index].length; jindex++) {
        // index = index array
        // jindex = index value
        // arr[index] = value per array
        
        if (array[index][jindex] == 'A' || array[index][jindex] == 'a') {
            temp.push(array[index])
            break
        } 
        
    }
    
    console.log(temp);
}

