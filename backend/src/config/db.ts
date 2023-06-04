import mongoose from 'mongoose';
import { dbUri } from '../config';

export const connectDB = async () => {
    try {
        const client:any = await mongoose.connect(dbUri,  {});
        console.log(`Connected to MongoDB`);
        return client;
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
      }
};

