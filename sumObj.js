var obj = {
	2: "elie",
	3: "liz",
	"-5": "nahhh",
	"awesome": "cho"
};

function sumKeys(obj){
	var sum = 0;
	for(var key in obj){
		if(!isNaN(key))			
			sum += Number(key); // Number is convert string to a number like parseint and parseFloat
	}
	return sum;
}

console.log(sumKeys(obj));

function sumKeys1(obj){
	return Object.keys(obj).reduce(function(prev, current){
		return prev = parseFloat(current) + prev || prev
	},0); // 0 is the default number for the started point in prev.

}
