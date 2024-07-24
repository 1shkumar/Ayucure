import { Router } from 'express';
import { createGroup, getGroups, createPost, getPosts, createComment, getComments } from '../controllers/communityController';
import auth from '../middleware/auth';
const router = Router();

router.post('/groups', auth, createGroup);
router.get('/groups', auth, getGroups);
router.post('/groups/:groupId/posts', auth, createPost);
router.get('/groups/:groupId/posts', auth, getPosts);
router.post('/posts/:postId/comments', auth, createComment);
router.get('/posts/:postId/comments', auth, getComments);

export default router;
