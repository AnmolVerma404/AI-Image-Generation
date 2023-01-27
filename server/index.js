import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

const PORT = 3001;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
	res.send('Hello from AI-Art');
});

const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URL);
		app.listen(PORT, () => {
			console.log(`Running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
