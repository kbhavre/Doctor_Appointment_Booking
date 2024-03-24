import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const regsiter = async (req, res) => {

    const { email, password, name, role, photo, gender } = req.body

    try {
        let user = null
        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        else if (role === 'doctor') {
            user = await User.findOne({ email })
        }

        // Check if the user exists or not 
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

        await user.save()

        res.status(200).json({success: true, message: "User Successfully Created"})
    }
    catch (err) { 
        res.status(500).json({success: false, message: "Internal server error, Try again"})
    }
};