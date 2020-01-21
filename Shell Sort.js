function shellSort(array) {
    let gapSize = Math.floor((array.length) / 2);
    let size = array.length;
    while (gapSize > 0) {
        for (i = 0; i < gapSize; i++) {
            let temp = array[i];
            console.log(array[gapSize + i],"-", gapSize, "-", i, "-", array[0]);
            for (j = gapSize + i; j >= 0 && array[gapSize + i] < temp; j = j - gapSize){
                array[i] = array[gapSize + i];
                array[gapSize + i] = temp;
            }
            console.log(array);
        }
        gapSize = Math.floor(gapSize/2) 
    }
    return array;
};
console.log(shellSort([3, 4, 0, -1, 1, -4, 7, 9]));

function shellSort(arr) {
    var increment = parseInt(arr.length / 2);
   
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];          
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }    
            arr[j] = temp;
        }
   
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}
console.log(shellSort([3, 0, 2, 5, -1, 4, 1,8,90,56,78]));