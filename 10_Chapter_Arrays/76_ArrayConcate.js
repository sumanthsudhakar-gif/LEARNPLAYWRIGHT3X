let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation
// ...  all the elements.
let d = [...a,...b];
console.log(d);


// join
// array in to big string
let s = ["pass","fail","skip"].join(" | ");
console.log(s);