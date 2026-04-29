import mongoose from "mongoose"
import { setReactDebugChannelForHtmlRequest } from "next/dist/server/dev/debug-channel";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "please provide usename"],
        unique : true,
    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique:true,
    },
    password: {
        type: String,
        required:[true, "please provide password"],

    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type:Boolean,
        default:false
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})
const user  = mongoose.models.users || mongoose.model
("users", userSchema);

export default user;

