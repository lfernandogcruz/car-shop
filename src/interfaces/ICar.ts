import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'Doors quantity is required',
  }).int().min(2, {
    message: 'Doors quantity must be at least 2',
  }).max(4, {
    message: 'Doors quantity must be at most 4',
  }),
  seatsQty: z.number({
    required_error: 'Seats quantity is required',
  }).int().min(2, {
    message: 'Seats quantity must be at least 2',
  }).max(7, {
    message: 'Seats quantity must be at most 7',
  }),
});

export type ICar = z.infer<typeof carZodSchema>;
