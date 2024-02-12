import { Router } from "express";
import {adminAuth} from "../controllers/client/auth"

const router = Router();
router.route("/"),post(adminAuth);