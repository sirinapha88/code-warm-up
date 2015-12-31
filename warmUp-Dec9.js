// Writing code is just one skill
// of a developer. Another skill you
// want to practice is the ability to
// read code. For the function below, 
// write the steps of execution. Then
// create a name for the function
// that describes what it's doing.

function random(array) {
  var m = array.length, t, i;
  

  while (m) {
  	// random number between 013
    i = Math.floor(Math.random() * m--);
	
    // t = array at index array.length
    t = array[m];
    
    //array[i]
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

console.log(random([2,3,4,7]));