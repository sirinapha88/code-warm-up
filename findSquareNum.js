function findSquareNum(num){
	var square = num / 4;
	return(Math.sqrt(num) === square);
}

console.log(findSquareNum(16));
console.log(findSquareNum(20));
console.log(findSquareNum(25));
console.log(findSquareNum(12));
