var name= "namste node js"

// var a=80;
// var b=20;
// console.log(a+b);
// console.log(name);

require("./xyz.js")

const {calculateMultipy,calculteSum}=require("./calculate")
const data=require("./data.json");

console.log(JSON.stringify(data));


console.log(globalThis=== global);//empty object
var a=20;
    var b=20;

calculteSum(a,b);
calculateMultipy(a,b);
