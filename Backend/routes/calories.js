import { Router } from 'express';
import { uploadImage, getCalories } from '../controllers/calorieController';
import auth from '../middleware/auth';
const router = Router();

router.post('/calories', auth, uploadImage);
router.get('/calories', auth, getCalories);

export default router;
