String.prototype.padLeft = function(ch, n) {
  if(this.length < n) {
    var diff = n - this.length;
    var tempArr = this.split('');
    var tmp;
    for(var i = 0; i < diff; i++) {
      tempArr.unshift(ch);
    }
    tmp = tempArr.toString().replace(/,/g, '');
    return tmp;
  }  else if(parseInt(this).toString() !== 'NaN'){
    return parseInt(this);
  } else {
    return this;
  }
};

String.prototype.padRight = function(ch, n) {
  if(this.length < n) {
    var diff = n - this.length;
    var tempArr = this.split('');
    var tmp;
    for(var i = 0; i < diff; i++) {
      tempArr.push(ch);
    }
    tmp = tempArr.toString().replace(/,/g, '');
    return tmp;
  } else if(parseInt(this).toString() !== 'NaN'){
    return parseInt(this);
  } else {
    return this.replace(/' '/g, '');
  }
};