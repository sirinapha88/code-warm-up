
// It's O(n²)

function insertionSort(arr) {
  
  for(var i = 0; i < arr.length; i++) {
    var tmp = arr[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the 
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
      //Shift the number
      arr[j+1] = arr[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    arr[j+1] = tmp;
  }
  return arr;
}

insertionSort([24,31,4,12,53,11,32,8,15]);
