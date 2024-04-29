import express, { json } from "express";
import dbConnect from "./config/database.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js"
import reviewRoute from "./routes/review.js"
import bookingRoute from "./routes/booking.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin:true,
};

//middleware
app.use(json());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// mounting
app.use("/api/v1/auth" , authRoute);
app.use("/api/v1/users" , userRoute);
app.use("/api/v1/doctors" , doctorRoute);
app.use("/api/v1/reviews" , reviewRoute);
app.use("/api/v1/bookings", bookingRoute);


// listening
app.listen(PORT,()=>{
    console.log(`Server is starting at port no. ${PORT}`);
})

dbConnect();

// default app
app.get("/",(req,res)=>{
    res.send("This is home page of Doctor's App")
})