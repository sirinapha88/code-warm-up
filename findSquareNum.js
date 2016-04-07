function findSquareNum(num){
	
	return(Math.sqrt(num)%1 === 0);
}

console.log(findSquareNum(16));
console.log(findSquareNum(20));
console.log(findSquareNum(25));
console.log(findSquareNum(12));
