import { Router } from "express";
import {fetchVideo, fetchVideoCategorey} from "../controllers/client/fetchvideo"
import {videoUpload} from "../controllers/admin/uploadvideo"
import {deletevideo} from "../controllers/admin/deletevideo"
import {catergoreylist, deletecatergorey, matchcatergorey} from "../controllers/client/categorey"
import {addcategorey} from "../controllers/client/categorey"
const router = Router();
router.route("/"),get(fetchVideo);
router.route('/').post(videoUpload);
router.route('/').delete(deletevideo); 
router.route('/').post(matchcatergorey); 
router.route('/').post(addcategorey); 
router.route('/').get(catergoreylist); 
router.route('/').post(fetchVideoCategorey); 
router.route('/').delete(deletecatergorey); 
