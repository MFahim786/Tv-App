import mongoose,{Schema} from "mongoose";
const uploadvideosdatas=new Schema(
{
    videourl: {type:String, required:true},
    videoCategorey: {type:String, required:true},
    videoname: {type:String, required:false},
 


} 

)
export const videoUploadSchema= mongoose.model("uploadvideosdatas",uploadvideosdatas)
