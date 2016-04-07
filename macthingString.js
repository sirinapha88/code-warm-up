function matchingString(str){
	return str.search(/([a-z]).*\1/i);
}

console.log(matchingString("abcdA"));
console.log(matchingString("abcdAaab"));
console.log(matchingString("abcdABCac"));