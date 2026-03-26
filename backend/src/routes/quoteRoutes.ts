import express from 'express';
import { createQuoteRequest, getAllQuotes } from '../controllers/quoteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createQuoteRequest);
router.get('/', protect, getAllQuotes); 

export default router;
