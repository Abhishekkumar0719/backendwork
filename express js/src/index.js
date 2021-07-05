const express= require("express")

const app = express();

app.get("/about",(req, res) =>{
    res.send("Hello form the about side");
})
app.get("/contact",(req, res) =>{
    res.send("Hello form the contact side");
})
app.get("/testimonial",(req, res) =>{
res.json([
    {
        Id:1,
        name:"Abhishek",
        require:true,
    },
    {
        Id:2,
        name:"Kumar",
        require:true,
    },
    {
        Id:3,
        name:"Rajak",
        require:false,
    },
]);
})
app.get("/projects",(req, res) =>{
    res.send("Hello form the projectsside");
})



app.listen(3000,() => {
    console.log("listing to the port 3000");
})