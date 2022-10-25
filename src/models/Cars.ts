import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

export const CarsMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: { type: Boolean, required: false },
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Cars extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', CarsMongooseSchema)) {
    super(model);
  }
}

export default Cars;