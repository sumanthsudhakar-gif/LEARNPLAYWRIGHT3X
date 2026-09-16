let fruits = ["bannana","apple","cherry"];
fruits.sort();
console.log(fruits);

let nums = [10,1,21,2];
nums.sort();
console.log(nums);
// Natural sorting

//arr= 1,2,3,4,5
//index = 0 1 2 3 4
// negative index -5,-4,-3,-2,-1  for  1,2,3,4,5
let arr = [1,2,3,4,5];
console.log(arr.slice(1,3));
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(0));
console.log(arr.slice(-3,-5));
// slice(start,end) -- returns new array
/// does not mutate actual -> ( start, end-1)
// dont give the end, it will automatically
// take from start to end

