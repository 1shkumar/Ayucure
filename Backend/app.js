import express from 'express';
import { json } from 'body-parser';
import authRoutes from './routes/auth';
import communityRoutes from './routes/community';
import fitnessRoutes from './routes/fitness';
import calorieRoutes from './routes/calorie';

const app = express();

app.use(json());

app.use('/api/auth', authRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/fitness', fitnessRoutes);
app.use('/api/calorie', calorieRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
