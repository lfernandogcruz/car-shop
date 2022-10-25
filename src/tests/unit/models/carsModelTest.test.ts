// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
import { carsMock, carsMockWithId } from '../../mock/carsMock';

describe('Cars Model', () => {
  const carsModel = new CarsModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carsMockWithId);
		sinon.stub(Model, 'findOne').resolves(carsMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await carsModel.create(carsMock);
			expect(newFrame).to.be.deep.equal(carsMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await carsModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(carsMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carsModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});