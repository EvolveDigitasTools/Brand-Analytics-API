"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const multer_1 = __importDefault(require("multer"));
// Create a new express application instance
const app = (0, express_1.default)();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
app.use(upload.any());
dotenv_1.default.config();
// The port the express app will listen on
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv_1.default.config({ path: envFile });
const models_1 = __importDefault(require("./models"));
const index_1 = __importDefault(require("./routes/index"));
app.use(express_1.default.json());
// Mount a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
models_1.default.sync().then(() => {
    console.log("Database synced successfully");
});
app.use('/api', index_1.default);
// Start the express server
app.listen(port, () => {
    console.log(`Server is running`);
});
