import { IService } from '../interfaces/IService';
import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcyclesService implements IService<IMotorcycle> {
  private _car: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._car = model;
  }

  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;
    return this._car.create(parsed.data);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const updated = await this._car.update(_id, parsed.data);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);
    return updated;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const deleted = await this._car.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);
    return deleted;
  }
}

export default MotorcyclesService;
