import Express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "../routes/pageRoute.js"
import photoRoute from "../routes/photoRoute.js"

dotenv.config();
//connection to the DB
conn();
const app=Express();
const port=3000;

//ejs template engine
app.set("view engine","ejs");

//static files middleware
app.use(Express.static('public'));
app.use(Express.json());
//routes
app.use("/",pageRoute);
app.use("/about",pageRoute);

app.use("/photos",photoRoute);


// app.get("/",(req,res)=>{
//     res.render("index");
// });
// app.get("/about",(req,res)=>{
//     res.render("about");
// });
app.listen(port,()=>{
    console.log(`Application running on port:${port}`)
});