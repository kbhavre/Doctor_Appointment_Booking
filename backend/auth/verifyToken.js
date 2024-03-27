import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";

export const authentication = async (req,res,next)=>{
    //get token

    const authToken = req.headers.authorization;

    // check token exists

    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({
            succuss:false,
            message:"Token authorization denied"
        })
    }

    try{
      const token = authToken.split(" ")[1];

      //verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      
      req.userId = decode.id
      req.role = decode.role
      next();
    }
    catch(err)
    {
        if(err.name==='TokenExpiredError'){
            return res.status(401).json({
                message:"Token is expired"
            })
        }

        return res.status(401).json({
            success:false,
            message:"Invalid Token"
        })
    }
}


export const restrict = roles=> async (req,res,next)=>{

    const userId = req.userId;
    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient;
    }
    if(doctor){
        user = doctor;
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({
            success:false,
            message:"You'are not authorized"
        })
    }
    next();
}