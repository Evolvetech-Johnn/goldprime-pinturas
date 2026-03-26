import mongoose, { Schema, Document } from 'mongoose';

export interface IPortfolio extends Document {
  title: string;
  description: string;
  imagesBefore?: string[];
  imagesAfter: string[];
  category: string;
  city: string;
  createdAt: Date;
}

const PortfolioSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagesBefore: [{ type: String }],
  imagesAfter: [{ type: String, required: true }],
  category: { type: String, required: true },
  city: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
