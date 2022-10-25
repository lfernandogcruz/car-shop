import { Router } from 'express';
import Motorcycle from '../models/Motorcycles';
import MotorcycleService from '../services/Motorcycles';
import MotorcycleController from '../controllers/Motorcycles';

const motorcyclesRouter = Router();

const motorcycleModel = new Motorcycle();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

motorcyclesRouter.post('/', (req, res) => motorcycleController.create(req, res));

motorcyclesRouter.get('/', (req, res) => motorcycleController.read(req, res));

motorcyclesRouter.get('/:id', (req, res) => motorcycleController.readOne(req, res));

motorcyclesRouter.put('/:id', (req, res) => motorcycleController.update(req, res));

motorcyclesRouter.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default motorcyclesRouter;