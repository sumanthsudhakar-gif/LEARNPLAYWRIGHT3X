let num = [10, 25, 30, 45, 50];
let result = num.find(x => x > 20); 
console.log(result); // undefined


let index = num.findIndex(x => x > 20);
console.log(index); // 1

nums.findlast(n => n > 20); // 50
nums.findLastIndex(n => n > 20); // 4