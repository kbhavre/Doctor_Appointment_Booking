const express = require("express");
const dbConnect = require("./config/database");
require("dotenv").config();

const app = express();
app.use(express.json());

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