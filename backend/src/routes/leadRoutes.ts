import express from 'express';
import { createLead, getAllLeads, updateLeadStatus } from '../controllers/leadController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createLead);
router.get('/', protect, getAllLeads); 
router.patch('/:id/status', protect, updateLeadStatus);

export default router;
