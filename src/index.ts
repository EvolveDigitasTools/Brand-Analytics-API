import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import routes from './routes/index'

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile})

// Mount a simple route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/api', routes)

// Start the express server
app.listen(port, () => {
    console.log(`Server is running`);
});
