import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    workTitle:{
        type: String,
        required:true,
    },
    completedBy:{
        type: Date,
        required: true,
    },
    description:{
        type:String
    }
})

export const List = mongoose.model("List", listSchema)