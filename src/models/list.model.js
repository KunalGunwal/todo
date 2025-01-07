import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    workTitle:{
        type: String
    }
})

export const List = mongoose.model("List", listSchema)