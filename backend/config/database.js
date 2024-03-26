import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

// require("dotenv").config();


const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("Database connection established successfully!")})
    .catch((err)=>{
        console.log("Database Connection refused");
        console.error(err.message);
        process.exit(1);
    })

}


export default dbConnect;