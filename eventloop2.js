const fs = require("fs");

setImmediate(()=>console.log("Immediate"));

setTimeout(()=>console.log("Timer "),0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","Utf8",()=>{
    setTimeout(()=>console.log("timer 2"),0)

    setImmediate(()=> console.log("setImmediate2"));

    process.nextTick(()=>console.log("2nd Tick"));

    console.log("file is reading cb");
});

process.nextTick(()=> console.log("nextTick 1"));

console.log("last line of the file")