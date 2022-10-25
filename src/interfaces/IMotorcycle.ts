import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const Motocas = ['Street', 'Custom', 'Trail'] as const;

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(Motocas),
  engineCapacity: z.number().int().min(1).max(2500),
});

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;
export { motorcycleZodSchema };
