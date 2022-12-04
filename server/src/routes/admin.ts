import express from 'express';
import controller from '../controllers/admin';

const router = express.Router();


router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
router.post('/logout', controller.postLogout);
router.post('/create-admin', controller.postCreateAdmin);


export default router;