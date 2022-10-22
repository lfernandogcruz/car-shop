import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const created = await this._service.create(body);
    return res.status(201).json(created);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const all = await this._service.read();
    return res.status(200).json(all);
  }

  public async readOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const one = await this._service.readOne(id);
    return res.status(200).json(one);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { body } = req;
    const updated = await this._service.update(id, body);
    return res.status(200).json(updated);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleted = await this._service.delete(id);
    return res.status(200).json(deleted);
  }
}

export default CarController;
