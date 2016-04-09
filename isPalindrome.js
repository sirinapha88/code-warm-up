function isPalindromeF(str){
	var newStr ='';
	for(var i = str.length-1; i >= 0; i--){
		newStr += str[i];
	}
	return str == newStr;
}

isPalindromeF("abba")