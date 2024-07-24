import { from } from '../supabaseClient';

export async function createGroup(req, res) {
    try {
        const { name, description } = req.body;
        const { data, error } = await from('groups')
            .insert([{ name, description }]);
        if (error) {
            throw error;
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error creating group' });
    }
}

export async function getGroups(req, res) {
    try {
        const { data, error } = await from('groups')
            .select('*');
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching groups' });
    }
}

export async function createPost(req, res) {
    try {
        const { groupId } = req.params;
        const { content } = req.body;
        const { data, error } = await from('posts')
            .insert([{ groupId, content, userId: req.user.id }]);
        if (error) {
            throw error;
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
}

export async function getPosts(req, res) {
    try {
        const { groupId } = req.params;
        const { data, error } = await from('posts')
            .select('*')
            .eq('groupId', groupId);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching posts' });
    }
}

export async function createComment(req, res) {
    try {
        const { postId } = req.params;
        const { content } = req.body;
        const { data, error } = await from('comments')
            .insert([{ postId, content, userId: req.user.id }]);
        if (error) {
            throw error;
        }
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error creating comment' });
    }
}

export async function getComments(req, res) {
    try {
        const { postId } = req.params;
        const { data, error } = await from('comments')
            .select('*')
            .eq('postId', postId);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching comments' });
    }
}
