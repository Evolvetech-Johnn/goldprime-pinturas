import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

// Connect to Database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'http://localhost:5174'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/quotes', quoteRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('GoldPrime Pinturas API is running...');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
