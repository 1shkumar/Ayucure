import { spawn } from 'child_process';
import { join } from 'path';

const analyzeImage = (imagePath) => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', [join(__dirname, 'analyze_image.py'), imagePath]);

        pythonProcess.stdout.on('data', (data) => {
            const result = data.toString().trim();
            const calories = parseInt(result, 10);
            resolve(calories);
        });

        pythonProcess.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
};

export default { analyzeImage };
