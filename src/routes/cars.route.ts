import { Router } from 'express';
import Cars from '../models/Cars';
import CarService from '../services/Cars';
import CarController from '../controllers/Cars';

const carsRouter = Router();

const carModel = new Cars();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carsRouter.post('/', (req, res) => carController.create(req, res));

carsRouter.get('/', (req, res) => carController.read(req, res));

carsRouter.get('/:id', (req, res) => carController.readOne(req, res));

carsRouter.put('/:id', (req, res) => carController.update(req, res));

carsRouter.delete('/:id', (req, res) => carController.delete(req, res));

export default carsRouter;