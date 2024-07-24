import { Router } from 'express';
import { createWorkout, getWorkouts, updateWorkout } from '../controllers/fitnessController';
import auth from '../middleware/auth';
const router = Router();

router.post('/workouts', auth, createWorkout);
router.get('/workouts', auth, getWorkouts);
router.put('/workouts/:workoutId', auth, updateWorkout);

export default router;
