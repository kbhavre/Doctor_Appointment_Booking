import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { configDotenv } from 'dotenv';


const generateToken = user=>{
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET,{expiresIn:'10d'});
}

export const register = async (req, res) => {

    const { email, password, name, role, photo, gender } = req.body

    try {
        let user = null
        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        else if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }

        // Check if the user exists or not 
        // It is already exist
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        // If no user found, then hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        const responseDB = await user.save()

        res.status(200).json({success: true, data:responseDB, message: "User Successfully Created"})
    }
    catch (err) { 
        res.status(500).json({success: false, message: "Internal server error, Try again"})
    }
};

export const login = async(req,res)=>{

    const {email, password} = req.body;
    // console.log(email, password);
    const incomingPassword = password;
    try{

        let user = null;

        const patient = await User.findOne({email});
        const doctor = await Doctor.findOne({email});

        if(patient){
            user=patient;
        }
        if(doctor){
            user=doctor;
        }

        // check user exits
        // console.log(user);
        if(!user){
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(incomingPassword, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({ success:false, message: "Password not matched" });
        }

        // get token
        const token = generateToken(user);
        const {password, role, appointments , ...rest} = user._doc;

        res.cookie('jwt', token , {httpOnly: true})

        res.status(200).json({
            success:true,
            message:"Login Successfull.",
            token:token,
            data:{...rest},
            role,
        })

    }catch(err){
        res.status(500).json({success: false, message: "Internal server error, Try again"})
    }

}



