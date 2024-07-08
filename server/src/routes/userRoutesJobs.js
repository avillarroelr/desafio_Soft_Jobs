import { Router } from 'express';
import { createNewUserJobs } from '../controllers/loginControllerJobs.js';
import { validateInfoUserJobs } from '../../middlewares/validateInfoUserJobs.js';
import { validateParamsUserJobs } from '../../middlewares/validateParamsUserJobs.js';

const router = Router();

router.post('/users', validateParamsUserJobs, validateInfoUserJobs, createNewUserJobs);

export default router;
