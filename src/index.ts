import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import multer from "multer";

// Create a new express application instance
const app: express.Application = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(upload.any());
dotenv.config();

// The port the express app will listen on
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile })

import connection from './models';
import routes from './routes/index'


app.use(express.json());
// Mount a simple route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

connection.sync().then(() => {
    console.log("Database synced successfully");
});

app.use('/api', routes)

// Start the express server
app.listen(port, () => {
    console.log(`Server is running`);
});
