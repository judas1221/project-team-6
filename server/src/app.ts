import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();

// Allow cors
app.use(cors());

// Set more security
app.use(helmet());

// Set help to endpoints
app.use(morgan("combined"));

export default app;