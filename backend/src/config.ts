import dotenv from 'dotenv';
dotenv.config()
import packageJson from '../package.json';

const { PORT, MONGODB_URI, JWT_SECRET_KEY } = process.env

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
    version: packageJson.version,
    name: packageJson.name,
    description: packageJson.description,

    nodeEnv: process.env['NODE_ENV'] ?? 'development',
    port: process.env['PORT'] ?? 3000,

    clientOrigins: {
        'development': process.env['DEV_ORIGIN'] ?? '*',
        'production': process.env['PROD_ORIGIN'] ?? 'none'
    }

}

export const port = PORT || 3000;
export const jwtSecretKey:string = JWT_SECRET_KEY!;
export const dbUri:string = MONGODB_URI!;

export default config