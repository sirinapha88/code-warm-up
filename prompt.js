function timeTimeout(callbackFunction) {
	var startTime = new Date().getTime();

	setTimeout(function(){
		// ALWAYS get the timestamp before you do any
		// logging or other work -- otherwise your time 
		// will be impacted by writing to the console, 
		// which is very slow.
		var endTime = new Date().getTime();
		var millisecondsElapsed = endTime - startTime;

		if(callbackFunction === undefined) {
			console.log("START TIME: " + startTime);
			console.log("END TIME  : " + endTime);
			console.log("ELASPED   :"  + millisecondsElapsed);
			console.log("callbackFunction was undefined -- exit\n\n");
		}
		else {
			callbackFunction(millisecondsElapsed);	
		}
	}, 500);
}

timeTimeout();

/* 
  Hint: You will have to use the fact that timeTimeout 
  accepts a callback function which passes the elapsed
  milliseconds as its parameter.
*/
timeTimeout(function(millisecondsElapsed){
	console.log("Entered Callback Function===");
	console.log("Time elapsed: " + millisecondsElapsed);
	console.log("\n\n");
});

/*
  It's interesting that the two calls setTimeout frequently don't 
  take the same amount of time, if you didn't notice this run the 
  program a few times in a row. 
  Your task is to complete this function so that it computes 
  the average amount of time in milliseconds it really takes
  for setTimeout() to trigger it's callback.  
  How much more than the specified 500ms does it seem to be off by? 
*/
function computeAverageTime() {
	var time = [];
	var sumOfTime = 0;
	
}


/*
 ==================== Part Two =====================
 Below are two programs to solve the same popular problem:
 
 compute the nth digit of the fibbonacci sequence:
 	[1, 1, 2, 3, 5, 8, 13, 21, 34 ...]
 One is recursive, and one is iterative; One is also slower. 
 Write some code that can prove that the recursive solution 
 is slower, by timing both functions. 
 Once you've got the functions timed, experiment with changing 
 the value of n and see how it affects the time for each version
 differently.
*/
function timeFibbonacciVersions(){

}


/*
  Do not alter these two functions.
*/
function fibbonacciRecursive(n) {
	if(n <= 1) {
		return 1;
	}

	return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
}

function fibbonacciIterative(n) {
	if(n <= 1) {
		return 1;
	}

	var fibNumber;
	var numberOne = 1;
	var numberTwo = 1;

	for(var i = 1; i < n; i++) {
		fibNumber = numberOne + numberTwo;
		numberOne = numberTwo;
		numberTwo = fibNumber;
	}

	return fibNumber;

}