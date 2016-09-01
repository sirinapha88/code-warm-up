// A linear search looks down a list, one item at the time without jumping.
// It can be performed on sorted or unsorted data
// It's O(n)

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


// This is for the data that already sorted. Just add boolean pastTarget to return the first item that it found.
function linearSearchSorted(arr, value){
	var targetLocation = -1;
	var found = false;
	var pastTarget = false;

	for(var i = 0; i < arr.length && !found && !pastTarget; i++){
		if(arr[i] === value){
			found = true;
			targetLocation = i;
			if(arr[i] > value);
			pastTarget = true;
		}
	}
	return targetLocation;
}
linearSearchSorted([3,5,5,6,7,9,9],5);