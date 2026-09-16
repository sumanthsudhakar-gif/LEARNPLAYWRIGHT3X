let result = Array.isArray([1,2,3,4]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// map, fileter , reduce

// every, some
[80, 90, 85].every (s = => s >=70) // true
[80, 60, 85].every (s = => s >=70) // false


// some

[80,60,85].some(s => s < 70); // true
[80,90,85].some(s => s < 70); // false
