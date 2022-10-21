import { z } from 'zod';

export const vehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
  }).min(3, {
    message: 'Model must be at least 3 characters',
  }),
  year: z.number({
    required_error: 'Year is required',
  }).int().min(1900, {
    message: 'Year must be at least 1900',
  }).max(2022, {
    message: 'Year must be at most 2022',
  }),
  color: z.string({
    required_error: 'Color is required',
  }).min(3, {
    message: 'Color must be at least 3 characters',
  }),
  status: z.boolean().optional(),
  buyValue: z.number({
    required_error: 'Buy value is required',
  }).int().min(0, {
    message: 'Buy value must be at least 0',
  }),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;
