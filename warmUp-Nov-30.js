function encryptString(str){

 	var alphabet, ch, index;
 	var coded = "";
 	var temp = [];
 	str = str.toLowerCase();
	alphabet = "abcdefghijklmnopqrstuvwxyza";
	                                      
        for (var i = 0; i < str.length; i++) {        
            ch = str.charAt(i);          
            index = alphabet.indexOf(ch);                       
            if (index == -1) {                        
                coded = coded + ch;                   
            }                                         
            else {                                    
                coded = coded + alphabet.charAt(index+1);    
            }
        }
        return coded;
}

encryptString("CAT");


var letterMap = {
    "a" : "b"
};

var letterArray = ["a", "b", "c", "d", "z", "a"];


function encrypt (inputString) {
    var output = [];
    for (var i = 0; i < inputString.length; i++) {
        output.push(letterArray[letterArray.indexOf(inputString[i])+1]);
    }
}

console.log(encrypt("abz"));