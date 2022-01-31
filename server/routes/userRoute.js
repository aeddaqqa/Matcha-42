import express from 'express';
import {
    authUser,
    getAllUsers,
    getUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/login').post(authUser);

export default router;
