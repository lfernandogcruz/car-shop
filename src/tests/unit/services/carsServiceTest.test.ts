import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import { carsMock, carsMockWithId } from '../../mock/carsMock';

describe('Frame Service', () => {
	const carsModel = new CarsModel();
	const frameService = new CarsService(carsModel);

	before(() => {
		sinon.stub(carsModel, 'create').resolves(carsMockWithId);
		sinon.stub(carsModel, 'readOne')
      // na chamada de index 0 `frameModel.readOne` vai responder um fakeFrame
			.onCall(0).resolves(carsMockWithId) 
      // já na próxima chamada ele vai mudar seu retorno, isso pode ser feito várias vezes
			.onCall(1).resolves(null); 
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.create(carsMock);

			expect(frameCreated).to.be.deep.equal(carsMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await frameService.create({});
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.readOne(carsMockWithId._id);

			expect(frameCreated).to.be.deep.equal(carsMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await frameService.readOne(carsMockWithId._id);
			} catch (err:any) {
				error = err;
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});
});