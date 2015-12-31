////////////////////////////////////

var list = ['milk', 'butter', 'cheese'];

function logList(list){
	console.log(list.toString());
}
logList(list);
////////////////////////////////////

var list = ['milk', 'butter', 'cheese'];

function logFirstAndLast(list){
	console.log(list[0].toString()+ ',' + list[list.length-1].toString());
}

logFirstAndLast(list);


var list = ['red', 'green', 'blue'];

function toUpperCase(lists){	
	for(var i = 0; i< lists.length; i++){
		lists[i]= lists[i].toUpperCase();     
    }
    return list;
}
console.log(toUpperCase(list));

////////////////////////////
var list = ['RED', 'GREEN', 'BLUE'];
function toLowerCase(lists){	
	for(var i = 0; i< lists.length; i++){
		lists[i]= lists[i].toLowerCase();     
    }
    return list;
}
console.log(toLowerCase(list));

//////////////////////////////////////
var list = [
  {width: 20, color: 'red'},
  {width: 50, color: 'blue'},
  {width: 10, color: 'purple'}
];

function getColors(list){
	myArr = [];
	for (var i = 0; i < list.length; i++) {
		myArr.push(list[i].color);
	}
	return myArr;
}

console.log(getColors(list));
///////////////////////////////////


var item = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 543}
];


function getStrongest(item){
	var strongest = 0;
	var newItem;
	for (var i = 0; i < item.length; i++) {
		if(strongest < item[i].strength){
			strongest = item[i].strength;
			newItem = item[i]; //***
		}		
	}
	console.log(newItem);
}
getStrongest(item);
///////////////////////////////

var orcs = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 543}
];

function getWeakest(orcs){
	var weakest = Infinity;
	var item;
	for (var i = 0; i < orcs.length; i++) {
		
		if(orcs[i].strength < weakest){
			weakest = orcs[i].strength;
			item = orcs[i]; //***
		}		
	}
	console.log(item);
}
getWeakest(orcs);

///////////////////////////////////////////

var orcs = [
    {
        name: 'Orgoth',
        strength: 9001,
        weapons: ['Bone ax', 'Mace of Strength']
    },
    {
        name: 'Blaroguhh',
        strength: 500,
        weapons: ['Cheeseburger', 'Spear of the Hut']
    },
    {
        name: 'Mark',
        strength: 543,
        weapons: ['Ax of Defense', 'Dagger', 'Sword' ]
    }
];

function getStrongestWeapons(orcs){
	var strongest = 0;
	var newItem;
	for (var i = 0; i < orcs.length; i++) {
		if(strongest < orcs[i].strength){
			strongest = orcs[i].strength;
			newItem = orcs[i]; //***
		}		
	}
	console.log(newItem.weapons);
}
getStrongestWeapons(orcs);

var orcs = [
    {
        name: 'Orgoth',
        strength: 9001,
        weapons: ['Bone ax', 'Mace of Strength']
    },
    {
        name: 'Blaroguhh',
        strength: 500,
        weapons: ['Cheeseburger', 'Spear of the Hut']
    },
    {
        name: 'Mark',
        strength: 543,
        weapons: ['Ax of Defense', 'Dagger', 'Sword']
    }
];

function getMostWeapons(orcs){
	var strongest = 0;
	var newItem;
	for (var i = 0; i < orcs.length; i++) {

		if(strongest < orcs[i].weapons.length ){
			strongest = orcs[i].weapons.length;
			newItem = orcs[i]; //***
		}		
	}
	console.log(newItem);

}
getMostWeapons(orcs);





















