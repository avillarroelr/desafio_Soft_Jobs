import { Router } from 'express';
import { loginUserJobs } from '../controllers/sessionControllerJobs.js';
import { validateParamsUserJobs } from '../../middlewares/validateParamsUserJobs.js';

const router = Router();

router.post('/userAuth', validateParamsUserJobs, loginUserJobs);  

export default router;