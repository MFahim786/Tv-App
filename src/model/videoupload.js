import mongoose,{Schema} from "mongoose";
const uploadVideosData=new Schema(
{
videourl: {type:String, required:true},
videoname: {type:String, required:false},
videoCategorey: {type:String, required:true},


} 

)
export const videoUploadSchema = mongoose.model("uploadVideosData",uploadVideosData)