import { Router } from 'express';
import { videoUpload } from '../controllers/admin/uploadvideo.js';

const router = Router();

router.route('/').post(videoUpload);

export default router