import express from 'express';
import routes from './routes/index';
import 'express-async-errors';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/cars', routes.carsRouter);

app.use(errorHandler);

export default app;
// new line for first commit
