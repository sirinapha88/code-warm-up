function removeDupes(input){

	var seenChar = {};
	var returnString = '';
	for (var i = 0; i < input.length; i++) {
		var c = input[i];

		if(seenChar[c] === undefined){
			returnString += c;
			seenChar[c] = true;
		}
	}
	return returnString;
}

function charCounts(input){
	var characterCount = {};

	for (var i = 0; i < input.length; i++) {
		var c = input[i];

		if(characterCount[c] === undefined){
			characterCount[c] = 1;
		} 
		else {
			characterCount[c] += 1;
		}
	}
	return characterCount;
}

function removeDupesEx(input){
	var characterCount = countCharacters(input);
	return Object.keys(characterCount).join('');
}


function removeDupesDry(input){
	var characterCount = countCharacters(input);
	var returnString= '';
	for (var i = 0; i < input.length; i++) {
		if(characterCount[input[i]] > 1){

		}
	}
	return Object.keys(characterCount).join('');
}


function removeDupes(input){
	
	var result = [];
	for (var i = 0; i < input.length; i++) {
		if(result.indexOf(input[i]) == -1) 
			result.push(input[i]);
	}
	return result.join();
}

function allUnique(input){
	return removeDupes(input) === input;
}

console.log(removeDupes('AABB')); // 'AB'
console.log(removeDupes('AaAaBbBb')); // 'AaBb'
console.log(removeDupes('cAtCaT')); // 'cAtCaT'