/*
Today we're going to solve an age-old problem that has plagued mountain villages and startups alike.
Given two entities that have preferences for matching, how do you ensure that these matchups are "stable"?
When we talk about stability, we mean that if two entities prefer each other over the partner they are matched with, the arrangement is not stable.
Given a list of developers, match them to companies. Match them such that no developer prefers a company that also prefers that developer over the one they are matched with. 
The "preferences" property represents an ordered list of preferences, with the first element being the most preferred.
*/


var developers = [
	{
		name: "Liz",
		preferences : [
			"AirBnB",
			"Facebook",
			"Pivotal",
			"Amazon",
			"Lyft",
			"Uber"
		]
	},
	{
		name: "Tyler",
		preferences : [
			"Lyft",
			"Facebook",
			"Pivotal",
			"AirBnB",
			"Amazon",
			"Uber"
		]
	},
	{
		name: "Cho",
		preferences : [
			"Uber",
			"Amazon",
			"Facebook",
			"AirBnB",
			"Pivotal",
			"Lyft"
		]
	},
	{
		name: "Zubair",
		preferences : [
			"AirBnB",
			"Pivotal",
			"Facebook",
			"Amazon",
			"Lyft",
			"Uber"
		]
	},
	{
		name: "Rosa",
		preferences : [
			"AirBnB",
			"Lyft",
			"Uber",
			"Facebook",
			"Pivotal",
			"Amazon"
		]
	}
];

var companies = [
	{
		name: "AirBnB",
		preferences : [
			"Liz",
			"Tyler",
			"Cho",
			"Zubair",
			"Rosa"
		]
	},
	{
		name: "Facebook",
		preferences : [
			"Cho",
			"Liz",
			"Tyler",
			"Zubair",
			"Rosa"
		]
	},
	{
		name: "Pivotal",
		preferences : [
			"Tyler",
			"Zubair",
			"Liz",
			"Cho",
			"Rosa"
		]
	},
	{
		name: "Amazon",
		preferences : [
			"Rosa",
			"Tyler",
			"Cho",
			"Zubair",
			"Liz"
		]
	},
	{
		name: "Lyft",
		preferences : [
			"Rosa",
			"Cho",
			"Zubair",
			"Liz",
			"Tyler"
		]
	},
	{
		name: "Uber",
		preferences : [
			"Liz",
			"Tyler",
			"Cho",
			"Zubair",
			"Rosa"
		]
	}
];




function permutator(inputArr) {
  var results = [];
  function permute(arr, memo) {
    var cur, memo = memo || [];
    for (var j = 0; j < arr.length; j++) {
      cur = arr.splice(j, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(j, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}
​
var companyPermutations = permutator(companies);
var levelsOfStability = [];
companyPermutations.forEach(function(elem,n,arr) {
	var localStability = 0;
	for (var i = 0 ; i< elem.length - 1; i++) {
		localStability += developers[i].preferences.indexOf(elem[i].name);
		localStability += elem[i].preferences.indexOf(developers[i].name);
	}
	levelsOfStability.push(localStability);
});
​
// console.log(companyPermutations.length);
// console.log(levelsOfStability.length);
var lowest = levelsOfStability.indexOf(Math.min.apply(Math, levelsOfStability));
console.log(companyPermutations[lowest]);
​
//result:
// Liz at AirBnb
// Tyl at Facebook
// Cho at Uber
// Zub at Pivotal
// Ros at Lyft