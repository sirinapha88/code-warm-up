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

 }
// function go(storageObj, string) {

//     if (string !== '') { // definition of !base case (NOT base case)
//       storageObj[ string[ 0 ] ] = storageObj[ string[ 0 ] ] + 1 || 1;
//       return go(storageObj, string.slice(1)); // recursive call
//     } // type mismatch in storageobj assignments "magically adjusted" by JS
//     return storageObj;  // base case

//   }
//   return go({}, string); //first call/invocation of go
// }


 console.log(charCounts("This is a string!!!"));
// { T: 1, h: 1, i: 3, s: 3, ' ': 3, a: 1, t: 1, r: 1, n: 1, g: 1, '!': 3 }


console.log(charCounts("!Data!Is~The*Coolest"));
// { '!': 2,
//   D: 1,
//   a: 2,
//   t: 2,
//   I: 1,
//   s: 2,
//   '~': 1,
//   T: 1,
//   h: 1,
//   e: 2,
//   '*': 1,
//   C: 1,
//   o: 2,
//   l: 1 }