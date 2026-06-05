 const fs=require("fs");
 
 const a=100;
fs.readFile("./file.txt","Utf8",()=>{
    console.log("fie reaqding cb")
});

setTimeout(()=> console.log("Timer expired"),0);

function printA(){
    console.log("a=",a);

}
printA();
console.log("last line")