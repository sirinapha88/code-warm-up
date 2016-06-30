function descendingOrder(n){  
  var digits = n.toString().split("");
  var num = digits.sort(function(a, b){return b-a}).join(); 
  var str = num.replace(/,/g, '');
  return parseInt(str)
   
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}


function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

function descendingOrder(n){
  //...
  var arr = [];
  var t = n.toString();

  for (var i = 0; i < t.length; i++) {
    arr.push(t.charAt(i));
  }

  arr.sort(function(a, b) {
    return b - a;
  });
  
  var final = arr.join('');
  final = Number(final);
  return final;
}

function descendingOrder(n){
  if(n<10) return n;
  var a = String(n).split('').sort(function(a,b){return b-a;});
  var b = '';
  for(var i = 0; i < a.length; i++) b +=a[i];
  return +b;
}