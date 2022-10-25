import express from 'express';
import 'express-async-errors';
import routes from './routes/index';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/cars', routes.carsRouter);
app.use('/motorcycles', routes.motorcyclesRouter);

app.use(errorHandler);

export default app;
