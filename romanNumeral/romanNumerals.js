/**
 * This function will convert a string to it's roman numeral value.
 * If the string is not a valid roman numeral string, this function
 * will return NaN.
 */


 var ROMAN_LOOKUP = {
		i: 1,
		v: 5,
		x: 10,
		l: 50,
		c: 100,
	};

function convertRomanNumeral(input) {
	// This constant could be globalized.
	

	var sum = 0;
	var lowerCaseInput = input.toLowerCase();
	
	for(var i = 0; i < lowerCaseInput.length; i++) {
		var currentChar = lowerCaseInput[i],
		    nextChar    = lowerCaseInput[i+1];
		    
		var currentRomanValue = ROMAN_LOOKUP[currentChar],
		    nextRomanValue    = ROMAN_LOOKUP[nextChar];

		if(currentRomanValue < nextRomanValue) {
			sum -= currentRomanValue;
		}
		else {
			sum += currentRomanValue;
		}
	}
	
	return sum;
}

console.log(convertRomanNumeral(24));


module.exports = {
    convertRomanNumeral: convertRomanNumeral
};


function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

// function testConvertRomanNumerals(){
//     var testCases = {
//         'VII': 7,
//         'vii': 7,
//         'I': 1,
//         'i': 1,
//         'IV': 4,
//         'Iv': 4,
//         'iV': 4,
//         'IX': 9,
//         'XCIV': 94,
//         'xciv': 94
//     };

//     var NanCases = {
//         'ggg': true
//     };

//     for(numeral in testCases) {
//         var actual = convertRomanNumeral(numeral);
//         if(actual !== testCases[numeral]) {
//             console.log('Failed on ${numeral}, expected ${testCases[numeral]} but got ${actual}');
//             return false;
//         }
//     }

//     for(numeral in NanCases) {
//         var actual = convertRomanNumeral(numeral);
//         if (!isNaN(actual)) return false;
//     }

//     console.log("all tests pass");
//     return true;
// }

// testConvertRomanNumerals();






