import { videoUploadSchema } from "../../model/videoupload.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const deletevideo = asyncHandler(async (req, res) => {
    try {
      
        // Find the video by ID and delete it
        const deletedVideo = await videoUploadSchema.findByIdAndDelete((req.body.id).trim());
        
        if (!deletedVideo) {
            // If the video with the provided ID does not exist, return a 404 error
            return res.status(404).json({
                status: "error",
                message: "Video not found",
                timestamp: new Date()
            });
        }

        // If the video was successfully deleted, send a success response
        res.status(200).json({
            status: "success",
            message: "Video deleted successfully",
            timestamp: new Date()
        });
    } catch (error) {
        console.log("Error while deleting video:", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            timestamp: new Date()
        });
    }
});

export { deletevideo };
