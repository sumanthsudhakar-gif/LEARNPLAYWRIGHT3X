let validName = "starts with letter"; // valid identifier
let _private = "Starts with underscore"; // valid identifier
let $jquery = "Starts with dollar sign"; // valid identifier

let item1 = "starts with letter and number"; // valid identifier
let _item2 = "starts with underscore and number"; // valid identifier
let $var1234 = "dollar then digit"; // valid identifier
let a1_a2 = "mixed letters digits underscore"; // valid identifier


//Keywords
// let class = "invalid";
// let const = "invalid";
// let function = "invalid";
let Function = "invalid";

let Myvar = "uppercase M";
let myVar = "lowercase v";

//1. camel case

let userName = "camelCase"; // valid identifier
let totalPrice = 99.99; // valid identifier
let isLoggedin = true; // valid identifier

//2 Pascal Case
let UserProfile = "PascalCase"; // valid identifier
let ShoppingCart = ["class name style"]; // valid identifier
function Person() {return "function camelCase";} // valid identifier

// 3. Snake Case
let user_name = "snake_case"; // valid identifier
let total_price = 99.99; // valid identifier
let is_logged_in = false; // valid identifier

// 4. Screming_Snake_Case (Constant Case)
const MAX_Size = 100; // valid identifier
const API_Key = "abc1234"; // valid identifier
const Database_URL = "localhost"; // valid identifier
