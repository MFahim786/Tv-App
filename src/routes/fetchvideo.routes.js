import { Router } from "express";
import {fetchVideo} from "../controllers/client/fetchvideo"
import {videoUpload} from "../controllers/admin/uploadvideo"
import {deletevideo} from "../controllers/admin/deletevideo"
import {matchcatergorey} from "../controllers/client/categorey"
import {addcatergorey} from "../controllers/client/categorey"
const router = Router();
router.route("/"),get(fetchVideo);
router.route('/').post(videoUpload);
router.route('/').delete(deletevideo); 
router.route('/').post(matchcatergorey); 
router.route('/').post(addcatergorey); 