import mongoose, { model, Schema } from "mongoose";


const userModel = new mongoose.Schema({

    fname : {
        type: String,
        required: true
    },
    lname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required:true
    },
    password : {
       type: String,
       required: true
    }

})

export default mongoose.model("User",userModel)