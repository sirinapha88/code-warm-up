function binarySearch(arr, target){
	var location = -1;
	var found = false;
	var first = 0;
	var last = arr.length-1;

	while(first <= last && !found){
		var mid = Math.round(first + last / 2);
		if(arr[mid] == target){
			location = mid;
			found = true;
		} else if(arr[mid] < target){
			first = mid + 1;
		} else {
			last = mid -1;
		}
	}
	return location;
}


console.log(binarySearch([12,15,16,18,34,45], 18));
console.log(binarySearch([23,45,67,68,78,89], 1));