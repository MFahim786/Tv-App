import { videoUploadSchema } from "../../model/videoupload.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
const fetchVideo = asyncHandler(async (req,res)=>{
     try{
        const videos = await videoUploadSchema.find();
        console.log(videos); 
        res.status(200).json({
        videos: videos,
        status: "success",
        message: "Request is Received",
        timestamp: new Date()
    });
     }catch(error){
     console.log("Error while fetch", error); 
     res.status(500).json({
         status: ("error",err),
         message: "Internal Server Error",
         timestamp: new Date()
     });

     }
})
export {fetchVideo}   