import express from 'express';
import controller from '../controllers/post';

const router = express.Router();


router.get('/posts', controller.getPosts);
router.get('/post/:id', controller.getPost);
router.post('/create', controller.createPost);
router.patch('/edit/:id', controller.updatePost);
router.delete('/delete/:id', controller.deletePost);

export default router;