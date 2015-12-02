// Arrays
// Just ordered content.

// Creation syntax is simple!
var a = [];

// The most common array operation is push, put this item at the end of the list
a.push(1);
a.push(2);
a.push(3);

console.log(a); // [1, 2, 3]

// Arrays are typically looped through
console.log("FOR======")
for (var i = 0; i < a.length; i++) {
	console.log(a[i]);
}

// We can do a while loop instead of a for loop
console.log("WHILE======")
var i = 0;
while(i < a.length) {
  console.log(a[i]); // a = [1,2,3], i = 0, a[0] === 1
  i++; // i == 1
}


// Inside of a loop, we can alter the values of the array!
for (var i = 0; i < a.length; i++) {

	a[i] = a[i] + 1;
	a[i] += 1
	a[i]++
}

console.log(a); // [4,5,6]

// It's okay to mix data types in a single array
b = [1, "two", false, NaN, undefined, null];

// We can make an object that looks kind of like an array
// by using an object whose keys are all integers. 
var semiArray = {
	0: "a",
	1: "b",
}

// But using that tactic won't get us special array things
// like length 
console.log(semiArray.length); // undefined
console.log(b.length)          // 6

// or push 
console.log(semiArray.push); // undefined
console.log(b.push)          // function

// We can set a length property though, even if it's wrong
semiArray.length = 50;

// And loop until that wrong length
for (var i = 0; i < semiArray.length; i++) {
	console.log(semiArray[i]) // prints a, b, then undefined 48 times
}

// OBJECTS
// Objects hold key: value pairs of arbitrary data

// Creating an object using the "object literal" syntax is easy 
obj = {};

// We can set properties using the dot notation
obj.blah = "Hello World";

// Or the bracket notation
obj['arbitraryString'] = "Fifty Five"

// right now, obj contains two key/value pairs
// blah: "Hello World"
// arbitraryString: "Fifty Five"
console.log(obj);

// We can access a single property with the dot or bracket notation
console.log(obj.blah);   // "Hello World"
console.log(obj['blah']) // "Hello World"

// The bracket notation is special in that we can use the 
// value of some variable as the key. Instead of storing a key
// of 'hello' this stores a key of 'blah'. Overwriting what used to be
// at blah (which was "Hello World")
var hello = 'blah';
obj[hello] = "SomthingCool"
console.log(obj.blah) // Something Cool


// These two statements are equivalent
obj.propTwo = 4;
obj['propTwo'] = 4

// Because of hoisting, propThree is available on this line, but it's value
// is undefined
obj[propThree] = 5;
var propThree;

// When storing a key of undefined, the string and the keyword are equivalent.
console.log(obj['undefined']);
console.log(obj[undefined]);

// Objects as Refereces
// Objects are stored as "references" to a location in memory. 
// The memory location stores the actual data, and the variables we create using 
// the keyword var only hold these references. Sometimes these are called pointers. 

// Allocate space for 2 objects in memory, and store pointers to them in obj1 and obj2
var obj1 = {a:1};
var obj2 = {b:2};

// obj3 points to the same memory location as obj1
var obj3 = obj1;

// obj4 points to the same memory location as obj2
var obj4 = obj2;

// When we add a property to obj4, obj2 seems to change as well. This 
// is because they both point to the same memory
obj4['c'] = 7;
console.log(obj4)
console.log(obj2)

// If we set obj1 to be a literal, we don't alter the memory location, we only 
// tell the var to hold a 1 instead of a memory address
obj1 = 1;
console.log(obj1)
console.log(obj3) // obj3 still has what obj1 ORIGINALLY had, even though obj1 has changed. 


// Strings are literals, so when we change obj3 we lose our last pointer to that memory 
// location. The Garbage Collector will now free the memory for use.
obj3 = "Something Totally Unrelated";
console.log("===========")

// Objects can hold references to other objects
var obj1 = {a:1};
var obj2 = {b:obj1, d: 4};
console.log(obj2);

// If we add a property to obj1, the reference to obj1 inside of obj2 changes
obj1.c = "anotherProperty";
console.log(obj2);



// Constructors and This

// We can create an object that is nearly identical using 
// the constructor function syntax
function Person(name) {
	this.name = name;
	this.sayMyName = function() {
		console.log(this.name);
	}

	this.isThisMe = function(obj) {
		console.log(this === obj);
	}
};

// When we use the constructor function syntax, it's easy to put something
// onto the "prototype" of all objects created using the constructor.
Person.prototype.sayMyName = function() {
	console.log("Beyonce");
};

b = new Person("Tyler");
c = new Person("Liz");
d = new Person("Cho");

// When we call a function using an object, the object we use
// to call the function is "this" inside of the function
b.sayMyName() // Tyler
c.sayMyName() // Liz
d.sayMyName() // Cho

// We can change the function on an individual Person
b.sayMyName = function() {console.log("baby I love you");}
b.sayMyName(); // baby I love you
c.sayMyName(); // Liz
d.sayMyName(); // Cho

// but the prototype has not changed for any of them
b.__proto__.sayMyName(); // Beyonce
c.__proto__.sayMyName(); // Beyonce
d.__proto__.sayMyName(); // Beyonce

// If we change the prototype for one of them, they ALL change
c.__proto__.sayMyName = function() {console.log("no")}
b.__proto__.sayMyName();// no
c.__proto__.sayMyName();// no
d.__proto__.sayMyName();// no

// If we remove the property from the main class
// it will default to the prototpe instead
delete d.sayMyName;
d.sayMyName(); // no
c.sayMyName() // Liz























