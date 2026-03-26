import express from 'express';
import { login, register, logout, getProfile } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', protect, getProfile);

export default router;
