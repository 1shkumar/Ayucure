import { from } from '../supabaseClient';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import { analyzeImage } from '../utils/analyzeImage';

exports.uploadImage = upload.single('foodImage'), async (req, res) => {
    try {
        const { path } = req.file;
        const calories = await analyzeImage(path);
        const { data, error } = await from('calories')
            .insert([{ foodImage: path, calories, userId: req.user.id }]);
        if (error) {
            throw error;
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error uploading image' });
    }
};

export async function getCalories(req, res) {
    try {
        const { data, error } = await from('calories')
            .select('*')
            .eq('userId', req.user.id);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching calorie data' });
    }
}
