import express from 'express';
import {
    authUser,
    getAllUsers,
    getUserProfile,
    registerUser,
} from '../controllers/userController.js';
// import protect from '../middlewares/authMiddleware.js';
import protect from '../middlewares.js/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
