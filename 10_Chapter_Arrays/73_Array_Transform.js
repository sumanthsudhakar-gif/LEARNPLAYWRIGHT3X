//let scores = [45,82,91,60,73];
//let grades = scores.map(s=> s> 70 ? "Pass" : "Fail");
//console.log(grades);

//let grades = scores.map (item_score=> item_score > 70 ? "Pass": "Fail");
//console.log(grades);

//let scores = [45,82,91,60,73];
//let passing = scores.filter (s => s >= 70);
//console.log(passing);


//let scores = [45, 82, 91, 60, 73];
//let sum =0;
//for ( let i = 0; i<S.l; i++)
{
   // sum = sum + score(i);

}
///console.log(sum);

//Map & Filter are the more common coding practices used from this element


let scores = [45, 82, 91, 60, 73];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

console.log("Total sum:", sum);