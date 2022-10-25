import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { carsMock, carsMockWithId } from '../../mock/carsMock';
import CarsController from '../../../controllers/Cars';
import CarsService from '../../../services/Cars';
import CarsModel from '../../../models/Cars';


describe('Cars Controller', () => {
  const carsModel = new CarsModel()
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(carsService, 'create').resolves(carsMock);
    sinon.stub(carsService, 'readOne').resolves(carsMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = carsMock;
      await carsController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {
      req.params = { id: carsMockWithId._id };
      await carsController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });
});