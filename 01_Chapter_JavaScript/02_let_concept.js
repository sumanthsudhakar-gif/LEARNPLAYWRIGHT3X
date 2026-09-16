//let a = 10;
//console.log(a);

for (let a=0; a < 100000; a++) {    
    console.log(a);
    badCodeFn(a);
}

function badCodeFn(a) {
    console.log(a);
}