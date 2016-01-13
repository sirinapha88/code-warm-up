// You are given an array of grades. You need to process this array, and return an array that describes whether each grade was higher, lower or even to the previous grade.

// So given the following array:

// Your code would produce:

// ["down","up","down","down","up","even","up"]
// When given an empty array, it returns an empty array.

// NOTE: your array tracks the differences between grades, so it will be one item shorter than the given array.

function arrayDifferences(myArr){
	var temp = [];

	for (var i = 0; i < myArr.length; i++) {
		if(myArr[i] < myArr[i+1] ){
			temp.push("up");
		}if (myArr[i] > myArr[i+1]){
			temp.push("down");
		} if (myArr[i] === myArr[i+1]){
			temp.push("even");
		}
	}
	return temp;
}

console.log(arrayDifferences([6,3,5,4,3,4,4,5]));