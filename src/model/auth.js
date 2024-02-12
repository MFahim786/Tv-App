import mongoose,{Schema} from "mongoose";
const userauth=new Schema(
{
username: {type:String, required:true},
password: {type:String, required:true},



} 

)
export const adminauth = mongoose.model("userauth",userauth)