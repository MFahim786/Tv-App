import express from "express"
const app = express()
import cors from "cors"
app.use(cors());
import bodyParser  from 'body-parser';
import { videoUpload } from "./controllers/admin/uploadvideo.js"
import { fetchVideo } from "./controllers/client/fetchvideo.js"
import { deletevideo } from "./controllers/admin/deletevideo.js"
import {adminAuth} from "./controllers/admin/auth.js"
import { matchcatergorey } from "./controllers/client/categorey.js";
import { addcatergorey } from "./controllers/client/categorey.js";
app.use(bodyParser.json());
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// })) 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//routes import
app.use("/api/videoupload", videoUpload)
app.use("/api/fetchvideo",fetchVideo)
app.use("/api/deletevideo",deletevideo)
app.use("/api/login",adminAuth)
app.use("/api/matchcategorey",matchcatergorey)
app.use("/api/addcatergorey",addcatergorey)
app.use((req, res, next) => { 
    res.status(404).json({
      error: 'Bad Request' 
    }); 
  }); 
export {app};