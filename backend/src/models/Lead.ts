import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  message?: string;
  status: 'novo' | 'em contato' | 'orçamento enviado' | 'fechado' | 'perdido';
  source: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  city: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['novo', 'em contato', 'orçamento enviado', 'fechado', 'perdido'], 
    default: 'novo' 
  },
  source: { type: String, default: 'website' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ILead>('Lead', LeadSchema);
