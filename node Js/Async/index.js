const fs= require("fs")

// fs.writeFile("read.txt","Hello I'm Happy",(err)=>
// {
//     console.log("this is correct");
//     console.log(err);
// })

// fs.appendFile("read.txt","Hello everybody" ,(err) =>
// {
//     // console.log("task complete")
// })

fs.readFile("read.txt","utf-8",(err, data) =>
{
    console.log("data")
})