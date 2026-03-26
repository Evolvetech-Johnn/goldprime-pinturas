import mongoose, { Schema, Document } from 'mongoose';

export interface IQuoteRequest extends Document {
  name: string;
  phone: string;
  service: string;
  propertyType: string;
  size?: string;
  urgency: string;
  images?: string[];
  address: string;
  createdAt: Date;
}

const QuoteRequestSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  propertyType: { type: String, required: true },
  size: { type: String },
  urgency: { type: String, required: true },
  images: [{ type: String }],
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IQuoteRequest>('QuoteRequest', QuoteRequestSchema);
