"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
// Create a new express application instance
const app = (0, express_1.default)();
// The port the express app will listen on
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv_1.default.config({ path: envFile });
// Mount a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', index_1.default);
// Start the express server
app.listen(port, () => {
    console.log(`Server is running`);
});
