import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import root from './routes/root';
import { connectDB } from './config/db'
const app = express();

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    // @ts-ignore
    origin: config.clientOrigins[config.nodeEnv]
}))
app.use(helmet())
app.use(morgan('tiny'))

// Connect to database
connectDB();

// Apply routes before error handling
app.use('/api', root)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app