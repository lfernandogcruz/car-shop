import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

export const MotorcyclesMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: { type: Boolean, required: false },
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class Motorcycles extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', MotorcyclesMongooseSchema)) {
    super(model);
  }
}

export default Motorcycles;