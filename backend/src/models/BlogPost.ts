import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  coverImage?: string;
  createdAt: Date;
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  coverImage: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
