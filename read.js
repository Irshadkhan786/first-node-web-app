var dateTime = require('node-datetime');
var formatted = dateTime.create().format('Y-m-d H:M:S:N');

const fs = require('fs');
console.log("First sync Call",new Date());
var data = fs.readFileSync('playground/notes.json');
console.log(JSON.parse(data));
console.log("Second sync Call",new Date());
var data = fs.readFileSync('playground/notes.json');
console.log(JSON.parse(data));
console.log('End Sync Call',new Date());

console.log("===================");
console.log("Start First Async call",new Date());
fs.readFile('playground/notes.json',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(JSON.parse(data));
    }
    //console.log("End First Async call",new Date());
});
console.log("Start Second Async call",new Date());
fs.readFile('playground/notes.json',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(JSON.parse(data));
    }
    
    console.log("End Second Async call",new Date());
})
console.log("End Program",new Date());