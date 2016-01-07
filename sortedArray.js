//Write a function that takes two arrays and returns a new array with all items in alphabetical order.

var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ];


function alphanimal(array1, array2){
	var newArr = [];
	newArr= array1.concat(array2);
	return newArr.sort();
}

console.log(alphanimal(array1, array2));
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]