// This code currently waits 300 seconds, then calls the function fizz
// which prints "fizz". Extend this code to achieve the tasks 
// listed below.



var timeSoFar = 0;
var intervalId = setInterval(printANum, 100);

function printANum(){

	timeSoFar += 100;
	if(timeSoFar % 300 === 0 && timeSoFar % 500 === 0){
		console.log('fizzbuzz');
		clearInterval(intervalId);
	}
	else if(timeSoFar % 300 === 0){
		console.log('fizz');
	}
	else if(timeSoFar % 500 === 0){
		console.log('buzz');
	}
	else{
		console.log(timeSoFar);
	}

	
}

// After 500ms print buzz

// prinANumber every 100ms and print the number of ms (100, 200, 300)

// Every 300 ms, print fizz

// Every 500 ms print buzz

// after 1500ms print fizzbuzz and stop all other printing functions.

// make it so 300 & fizz don't print, rather only fizz prints on the 300th ms

// Same for 500 and buzz

