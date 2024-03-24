const mongoose = require("mongoose");
require("dotenv").config();


const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("Database connection established successfully!")})
    .catch((err)=>{
        console.log("Database Connection refused");
        console.error(err.message);
    })

}

module.exports = dbConnect;