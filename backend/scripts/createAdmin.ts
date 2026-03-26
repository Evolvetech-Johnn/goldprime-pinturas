import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import User from '../src/models/User.js';
import connectDB from '../src/config/db.js';

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const adminExists = await User.findOne({ email: 'admin@goldprime.com.br' });

    if (adminExists) {
      console.log('Admin user already exists');
      process.exit();
    }

    const admin = await User.create({
      name: 'Admin GoldPrime',
      email: 'admin@goldprime.com.br',
      password: 'admin123', // Change this in production
      role: 'admin',
    });

    if (admin) {
      console.log('Admin user created successfully');
    } else {
      console.log('Failed to create admin user');
    }

    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

createAdmin();
