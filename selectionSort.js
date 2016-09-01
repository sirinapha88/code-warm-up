// Selection Sort 

// It's the way to find the smallest position and swap it with the first position and so on.

function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
    //set min to the current iteration of i
    var min = i;
    
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
      	min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

selectionSort([24,31,4,12,53,11,32,8,15]);

