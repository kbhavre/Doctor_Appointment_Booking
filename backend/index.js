import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"


// configure env
dotenv.config()

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
}

app.get('/', (req, res)=>{
    res.send("API is working");
})




// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})