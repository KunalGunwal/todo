import mongoose from "mongoose";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler( async (req,res) => {
    console.log(req.body)
    const {username, email, password} = req.body

    console.log(`${username}  ${email} ${password}`)
    if(!email || !username||!password){
        throw new ApiError(400, "All feilds are required")
    }

    const existedUser = await User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(400, "These user alredy exists")
    }

    const user = await User.create({
        username,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if(!createdUser){
        throw new ApiError(400, "Something Went Wrong")
    }

    return res.status(200).json(
        new ApiResponse(200,createdUser,"User Registered Successfully")
    )
})


const loginUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        throw new ApiError(400, "email and password required")
    }

    const user = await User.findOne({email})
    const pass = await user.password
    if(pass!=password){
        throw new ApiError(400,"Wrong Password")
    }

    return res.status(200).json(
        new ApiResponse(200,user,"Login Successfull")
    )
})

export {
    registerUser,
    loginUser
}