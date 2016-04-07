function findIndexArraySorted(arr,n){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === n){
			return arr[i];
		}
	}
	return -1
}

findIndexArraySorted([3,5,7,7,9,11], 7);