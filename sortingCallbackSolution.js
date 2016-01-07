// These two functions are compare functions, used by Array.sort()
// See these docs for more reference on compare functions:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// The objects should be sorted by numberOne in ascending order (low to high)
function sortByNumber(first, second) {
	return first - second;
}

/* Write tests for each of these callbacks. 
 * First, test the function directly, for example sortByNumber(5, 10) should return -5.
 * Then, test the function using the function with Array.sort. 
 * for example :
 *	 var a = [3,2,1];
 *   a.sort(sortByNumber);
 *   NOW a SHOULD BE [1,2,3];
 *
 * Finally, wrap those tests in a function testSortByNumber() which returns true if,
 * and only if, sortByNumber is correct as an individual function, and as a compare function.
 */
