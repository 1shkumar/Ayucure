import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { from } from '../supabaseClient';

export async function register(req, res) {
    try {
        const { username, password, email } = req.body;
        const { data: existingUser, error } = await from('users')
            .select('*')
            .eq('username', username)
            .single();

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await hash(password, 10);
        const { data, error: insertError } = await from('users')
            .insert([{ username, password: hashedPassword, email }]);

        if (insertError) {
            throw insertError;
        }

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;
        const { data: user, error } = await from('users')
            .select('*')
            .eq('username', username)
            .single();

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = sign({ id: user.id }, 'secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
}
