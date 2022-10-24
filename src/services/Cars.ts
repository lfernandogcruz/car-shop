import IService from '../interfaces/IService';
import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._car.create(parsed.data);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar> {
    // if (!carZodSchema.safeParse({ _id }).success) throw new Error(ErrorTypes.InvalidCarId);
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    // if (!carZodSchema.safeParse({ _id }).success) throw new Error(ErrorTypes.InvalidCarId);
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const updated = await this._car.update(_id, parsed.data);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);
    return updated;
  }

  public async delete(_id: string): Promise<ICar> {
    // if (!carZodSchema.safeParse({ _id }).success) throw new Error(ErrorTypes.InvalidCarId);
    const deleted = await this._car.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);
    return deleted;
  }
}

export default CarsService;
