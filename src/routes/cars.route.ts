import { Router } from 'express';

const carsRouter = Router();

carsRouter.post('/', () => {
  console.log('POST /cars');
});

carsRouter.get('/', () => {
  console.log('GET /cars');
});

carsRouter.get('/:id', () => {
  console.log('GET /cars/:id');
});

carsRouter.put('/:id', () => {
  console.log('PUT /cars/:id');
});

carsRouter.delete('/:id', () => {
  console.log('DELETE /cars/:id');
});

export default carsRouter;