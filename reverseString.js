function reverseString(str){
	var newStr = "";
	for (var i = str.length-1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

console.log(reverseString("eat"));


function reverseString(str){
	return str.split('').reverse().join('');
}
reverseString("words");

function reverseWords(str){
	return str.split(' ').reverse().join(' ');
}

function reverseInPlace(str){
	return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
reverseInPlace("new words naja kun");


function charCounts(input){
  var characterCount = {};

  for (var i = 0; i < input.length; i++) {
    var c = input[i];

    if(characterCount[c] === undefined){
      characterCount[c] = 1;
    } 
    else {
      characterCount[c]++;
    }
  }
  return characterCount;
  //for (var j in characterCount){
  //	if(characterCount[j] >1)
  //	return j;
  //}
 }
 
 charCounts('hello')