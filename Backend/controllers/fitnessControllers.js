import { from } from '../supabaseClient';

export async function createWorkout(req, res) {
    try {
        const { plan, metrics } = req.body;
        const { data, error } = await from('workouts')
            .insert([{ plan, metrics, userId: req.user.id }]);
        if (error) {
            throw error;
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error creating workout' });
    }
}

export async function getWorkouts(req, res) {
    try {
        const { data, error } = await from('workouts')
            .select('*')
            .eq('userId', req.user.id);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching workouts' });
    }
}

export async function updateWorkout(req, res) {
    try {
        const { workoutId } = req.params;
        const { plan, metrics } = req.body;
        const { data, error } = await from('workouts')
            .update({ plan, metrics })
            .eq('id', workoutId)
            .eq('userId', req.user.id);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error updating workout' });
    }
}
