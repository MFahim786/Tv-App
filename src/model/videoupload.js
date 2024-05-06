import mongoose, { Schema } from "mongoose";

const uploadVideosDataSchema = new Schema({
    videourl: { type: String, required: true },
    videoCategory: { type: String, required: true },
    videoname: { type: String, default: "" } // Providing a default value since it's not required
});

export const videoUploadSchema = mongoose.model("uploadvideosdatas", uploadVideosDataSchema);
