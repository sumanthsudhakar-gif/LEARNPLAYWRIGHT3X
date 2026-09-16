let tests = ["login", "Checkout", "Search",];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

for (let test of tests) {
    console.log(test);
}

console.log("--------------------");


tests.forEach((test, index) => {
    console.log(`${index}: ${test}`);
}};

for (let student in students) {
    console.log(student, "->", students[student]);