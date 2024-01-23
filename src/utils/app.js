import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { videoUpload } from "../controllers/admin/uploadvideo.js"
import { fetchVideo } from "../controllers/client/fetchvideo.js"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
app.use("/api/videoupload", videoUpload)
app.use("/api/fetchvideo",fetchVideo)
export { app }