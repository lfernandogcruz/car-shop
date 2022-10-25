import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  public async create(req: Request, res: Response<IMotorcycle>) {
    const { body } = req;
    const created = await this._service.create(body);
    return res.status(201).json(created);
  }

  public async read(req: Request, res: Response<IMotorcycle[]>) {
    const all = await this._service.read();
    return res.status(200).json(all);
  }

  public async readOne(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const one = await this._service.readOne(id);
    return res.status(200).json(one);
  }

  public async update(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const { body } = req;
    const updated = await this._service.update(id, body);
    return res.status(200).json(updated);
  }

  public async delete(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).send();
  }
}

export default MotorcycleController;
