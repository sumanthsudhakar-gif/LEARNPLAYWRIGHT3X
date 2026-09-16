// Type operators are used to convert a value from one type to another. In JavaScript, there are several type operators that can be used for this purpose. Here are some common type operators:

// 1. String() - Converts a value to a string.
let num = 42;
let str = String(num); // "42"  

// 2. Number() - Converts a value to a number.
let strNum = "3.14";
let numFromStr = Number(strNum); // 3.14

// 3. Boolean() - Converts a value to a boolean.
let truthyValue = "Hello";
let falsyValue = 0;
let boolFromTruthy = Boolean(truthyValue);
let boolFromFalsy = Boolean(falsyValue); // false

// 4. parseInt() - Converts a string to an integer.
let intStr = "42";
let intValue = parseInt(intStr); // 42          

// 5. parseFloat() - Converts a string to a floating-point number.
let floatStr = "3.14";
let floatValue = parseFloat(floatStr); // 3.14          

// 6. toString() - Converts a value to a string representation.
let numValue = 100;
let strValue = numValue.toString(); // "100"    
console.log("6. String representation:", strValue);

// 7. typeof - Returns the type of a value as a string.
let value = 42;
let typeOfValue = typeof value; // "number"
console.log("7. Type of value:", typeOfValue);