import express, { json } from "express";
import dbConnect from "./config/database.js";
import dotenv from 'dotenv'

dotenv.config();
// require("dotenv").config();

const app = express();
app.use(json());

const PORT = process.env.PORT;

// routing
// const user = require("./routers/user");
// mounting
// app.use("/api/v1" , user);


// listening
app.listen(PORT,()=>{
    console.log(`Server is starting at port no. ${PORT}`);
})

dbConnect();

// default app
app.get("/",(req,res)=>{
    res.send("This is home page of Doctor's App")
})