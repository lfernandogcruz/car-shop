import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());

app.use('/cars', routes.carsRouter);

export default app;
// new line for first commit
