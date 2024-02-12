import { asyncHandler } from "../../utils/asyncHandler.js"
import {videoUploadSchema  } from "../../model/videoupload.js";
const videoUpload = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        const { videoName, videoUrl, videoCategory } = req.body;

        const videoData = {
            videoname: videoName,
            videourl: videoUrl,
            videoCategorey: videoCategory
        };
 
        // Assuming 'haiku' is a MongoDB collection object
        const result = await videoUploadSchema.create(videoData);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        res.status(200).json({
            status: "success",
            message: "Request is Received",
            timestamp: new Date()
        });
    } catch (error) {
        console.error('Error during video upload:', error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            timestamp: new Date()
        });
    }
});

export {videoUpload} 