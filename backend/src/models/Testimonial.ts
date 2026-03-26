import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  city: string;
  text: string;
  rating: number;
  photo?: string;
  createdAt: Date;
}

const TestimonialSchema: Schema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  photo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
