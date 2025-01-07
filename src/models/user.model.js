import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
        trim:true,
        lowercase:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password: {
        type:String,
        required:[true,'Password is required'],
    }
})

export const User = mongoose.model("User", userSchema)