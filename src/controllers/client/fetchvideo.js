/* The code you provided is a JavaScript module that exports a function called `fetchVideo`. */
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
const fetchVideoCategorey = asyncHandler(async (req, res) => {
    try {
      const { categorey } = req.body; 
      console.log(categorey);
      let query = {};
  
      if (categorey) {
        // If category is provided, filter videos by category
        query = { videoCategorey: categorey };
      }
  
      const videos = await videoUploadSchema.find(query);
      console.log(videos); 
      res.status(200).json({
        videos: videos,
        status: "success",
        message: "Request is Received",
        timestamp: new Date()
      });
    } catch (error) {
      console.log("Error while fetching videos:", error); 
      res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        timestamp: new Date()
      });
    }
  });
  

export {fetchVideo,fetchVideoCategorey}   
