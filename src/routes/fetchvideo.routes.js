import { Router } from "express";
import {fetchVideo} from "../controllers/client/fetchvideo"
const router = Router();
router.route("/"),get(fetchVideo);