const express= require("express")
const path= require("path");
const hbs= require("hbs")
const app = express();

//Build middleware
const static_path= path.join(__dirname, "../public")
const templete_path= path.join(__dirname,"../templete/views")
const partials= path.join(__dirname,"../templete/partials")
app.use(express.static(static_path));

app.set("view engine", "hbs")
app.set("views",templete_path)
hbs.registerPartials(partials)

//built templete engin
app.get("/",(req,res) =>{
    res.render("index" ,{
        tag:"Abhishek",
    })
})
app.get("/about",(req,res) =>{
    res.render("about")
})


app.get("/",(req, res) =>{
    res.send("Hello form the server side");
})

//here abot sectio 404 eror

app.get("/about/*",(req,res)=>{
    res.render("404",{
        error:"This page Couldn't find in about page"
    })
})

//error
app.get("*",(req,res)=>{
    res.render("404",{
        error:"This page Couldn't find"
    })
})

app.listen(3000,() => {
    console.log("listing to the port 3000");
})