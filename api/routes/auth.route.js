import express from 'express';
import { add_new_user } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/add-new-user", add_new_user)

export default router;