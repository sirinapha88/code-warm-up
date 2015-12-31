function sumArgs(){
	var count = 0;
	for (var i = 0; i < arguments.length; i++) {
		count += arguments[i];
	}
	return count;
}

function sumArgsWithReduce(){
	// because arguments doesn't have a propoties of reduce
	// we have to copy all of propoties from Array to arguments
	// use slice to copy all the value in arguments
	var args = Array.prototype.slice.call(arguments);
}


var obj = {
	name: "Elie",
	sayHi: function(){
		return this.name; // this is refer to the obj
	}
}
