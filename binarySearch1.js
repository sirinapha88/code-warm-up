// Binary search is when you start with the middle of a sorted list 
// and see whether that's greater or less than the value you're looking for.
// It's O(log n)

function binarySearch(arr,value){
	var targetLocation = -1;
	var found = false;
	var first = 0;
	var last = arr.length-1; //don't forget -1

	while(first <= last && !found){
		var mid = (first + last) / 2;
		if(arr[mid] === value){
			targetLocation = mid;
			found = true;
		}
		else if(arr[mid] < value){
			first = mid + 1;
		}
		else {
			last = mid - 1;
		}
	}
	return targetLocation;
}

binarySearch([3,5,5,6,7,9,9],9);

function binarySearch(arr, item, lowIndex, highIndex) {
    var midIndex = //compute this;
    var currentItem = arr[midIndex];
    
    //we found it
    if(currentItem === item) {
        return midIndex;
    }

    if(lowIndex === highIndex || arr.length === 0) {
        // either we have a solution or a failure
        return -1;
    }

    // guess is too high.
    if(item < currentItem) {
        return binarySearch(arr, item, lowIndex, midIndex - 1)
    }

    // guess is too low.
    if(item > currentItem){ 
        return binarySearch(arr, item, midIndex + 1, highIndex);
    }

    // Is it possible to get here?
    throw new Error("You used invalid input, no comparisons returned true for", item, currentItem);
}

binarySearch(arr, item, 0, arr.length - 1);
