import { MongoGridFSChunkError } from "mongodb";
import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
    {
        doctor: {
            type: mongoose.Types.ObjectId,
            ref: "Doctor",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            max: 5,
            min: 0,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

reviewSchema.pre(/^find/ , function (next) {
    this.populate({
        path:"user",
        select: "name photo",
    });
    next();
})

// average rating
reviewSchema.statics.calcAverageRatings = async function(doctorId){

    // this point to the current review
    const stats = await this.aggregate([{
        $match:{doctor:doctorId}
    },
    {
        $group:{
            _id:'$doctor',
            numOfRating:{$sum:1},
            avgRating:{$avg:'$rating'},
        }
    }
])

// update doctor rating
await Doctor.findByIdAndUpdate(doctorId,{
    totalRating:stats[0].numOfRating,
    averageRating:stats[0].avgRating,
})


}


reviewSchema.post('save', function(){
    this.constructor.calcAverageRatings(this.doctor);
})


export default mongoose.model("Review", reviewSchema);