import dotenv from 'dotenv';

dotenv.config();

export const Environment = {
    PORT: process.env.PORT || 4000
}