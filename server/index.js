import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

const PORT = 3001;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
	res.send('Hello from AI-Art');
});

const startServer = async () => {
	app.listen(PORT, () => {
		console.log(`Running on http://localhost:${PORT}`);
	});
};

startServer();
