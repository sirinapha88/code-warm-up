// This function will return first index if you want to return last index. You don't have to use boolean found.

function linearSearch(arr, value){
	var targetLocation = -1;
	var found = false;

	for(var i = 0; i < arr.length && !found; i++){
		if(arr[i] === value){
			found = true;
			targetLocation = i;
		}
	}
	return targetLocation;
}

linearSearch([3,5,2,6,7,3,9,2],3);