
// Lesson40
var x = "Hello World!";


// Lesson41
var message = "in global";
console.log("global: message = "+ message);

var a = function () {
	var message = "inside a";
	console.log("a: message = "+ message);
function b () {
    console.log("b: message = " + message);
 }

	b();
}
a();


//Lesson42
var y;
console.log(y);

if (y == undefined) {
	console.log("y is undefined");
}

y = 5;
if (y == undefined) {
	console.log("y is undefined");
}
else {
	console.log("y has been defined");
}

//Lesson43 *** String concatination

// var string = "Hello";
// string += " World";
// // string = string + " World";
// console.log(string + "!");

//*** Regular math operators: +. -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined /5);
// function test1 (a) {
// 	console.log(a / 5);
// }
// test1();

//*** Equality
// var a = 4, b = 4;
// if (a == b) {
// 	console.log("a=4 is equal to b=4");
// }

// a = "4";
// if (a == b) {
// 	console.log("a='4' is equal to b=4");
// }

// // // *** Strict equality
// if (a === b) {
// 	console.log("Strict: a='4' is equal to b=4");
// }
// else {
// 	console.log("Strict: a='4' is NOT equal to b=4");
// }

//*** If statement (all false)
// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("this line will never execute");
// }
// else {
// 	console.log("All false");
// }
//*** If statement (all true)
// if (true && "Hello" && 1 && -1 && 'false') {
// 	console.log("all true");
// }

// // ***Best practice for {} style
// // Same line or next?
// // is it just a style? - IT IS NOT! Second way is correct.
// function a()
// {
// 	return 
// 	{
// 		name: "Julia";
// 	};
// }

// function b() {
// 	return {
// 		name: "Julia"
// 	};
// }

// console.log(a());
// console.log(b());

For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum = sum +i;
}
console.log("sum of 0 through 9 is: " + sum);

// // *** Lesson44 - setting default value
// function orderChickenWith(sideDish) {
//   //if (sideDish === undefined) {
//   //	sideDish = "whatever!"; ----- OR
//   sideDish = sideDish || "whatever!";	
//   console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// // *** Lesson45 - object creation
// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " 
// 	+ company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of the company";
// company[stockPropName] = 110;

// console.log("Stock price is: " +
// 	company[stockPropName]);	

// Better way: object literal

var facebook = {
	name: "facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	"Stock of company": 110
}

console.log(facebook);

// *** Lesson46
// Functions are First-Class Data Types
// Functions ARE objects

function multiply(x, y) {
	return x * y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
 function makeMultiplier(multiplier) {
 	var myFunc = function(x) {
 		return multiplier * x;
 	}

 	return myFunc;
 }

 var multiplyBy3 = makeMultiplier(3);
 console.log(multiplyBy3(10));
 var doubleAll = makeMultiplier(2);
 console.log(doubleAll(100));

 // Passing functions as arguments

 function doOperationOn(x, operation) {
 return operation(x);	
 }

 var result = doOperationOn(5, multiplyBy3);
 console.log(result);
 result = doOperationOn(100, doubleAll);
 console.log(result);

 //***Lesson47

 //Copy by Reference vs by Value

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b undate:");
// console.log("a: " + a);
// console.log("b: " + b); 

// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x undate:");
// console.log(a);
// console.log(b);

// // Pass by reference vs by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }
//  var value = 7;
//  changePrimitive(value); // primValue = value
//  console.log("after changePrimitive, orig value:");
//  console.log(value);


// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// }

// value = {x: 7};
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);

// //*** Lesson48

// function test() {
// 	console.log(this);
// 	this.myName = "Julia";
// }
// test();
// console.log(window.myName); // THIS

// // Function constructors

// function Circle(radius) {
// 	this.radius = radius;
// }
// 	Circle.prototype.getArea =
// 		function() {
// 			return Math.PI *  Math.pow(this.radius, 2);		
// }
//  var myCircle = new Circle(10);
//  console.log(myCircle);

//  var myOtherCircle = new Circle(20);
//  console.log(myOtherCircle);

 // *** Lesson49
var literalCircle = {
	radius: 10,

	getArea: function() {
		var self = this;
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20;
		}
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
}

console.log(literalCircle.getArea());

//*** Lesson50
// Arrays

// var array =  new Array();
// array[0] = "Julia";
// array[1] = 2;
// array[2] = function(name) {
// 	console.log("Hello " + name);
// }
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// Short hand array creation
// var names = ["Julia", "Anna", "Olga"];

// console.log(names);

// for (var i=0; i < names.length; i++) {
// 	console.log("Hello "+ names[i]);
// }

// names[100]= "Sofia";
// for (var i=0; i < names.length; i++) {
// 	console.log("Hello "+ names[i]);
// }

var names2 = ["Julia", "Anna", "Olga"];

var myObj = {
	name: "Julia",
	course: "HTML/CSS/JS",
	platform: "Coursera"
}

for (var prop in myObj) {
	console.log( prop + ": " + myObj[prop]);
}

for (name in names2){
	console.log("Hello " + names2[name]);
}

// *** Lesson51

//Closures

function makeMultiplier(multiplier) {

	function b(){
	console.log("Multiplier is " + multiplier);
}	
b();

return(
		function(x) {
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// *** Lesson52



