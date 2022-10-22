import IService from '../interfaces/IService';
import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._car.create(parsed.data);
  }

  public async read():Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id:string):Promise<ICar | null> {
    if (!carZodSchema.safeParse({ _id }).success) throw new Error(ErrorTypes.InvalidCarId);
    return this._car.readOne(_id);
  }

  public async update(_id:string, obj:Partial<ICar>):Promise<ICar | null> {
    if (!carZodSchema.safeParse({ _id }).success) throw new Error(ErrorTypes.InvalidCarId);
    return this._car.update(_id, obj);
  }

  public async delete(_id:string):Promise<ICar | null> {
    if (!carZodSchema.safeParse({ _id }).success) throw new Error(ErrorTypes.InvalidCarId);
    return this._car.delete(_id);
  }
}

export default CarsService;