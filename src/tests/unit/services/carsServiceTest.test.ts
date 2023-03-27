import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import { carsMock, carsMockWithId } from '../../mock/carsMock';

describe('Cars Service', () => {
	const carsModel = new CarsModel();
	const frameService = new CarsService(carsModel);

	before(() => {
		sinon.stub(carsModel, 'create').resolves(carsMockWithId);
		sinon.stub(carsModel, 'readOne')
			.onCall(0).resolves(carsMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(carsModel, 'read')
			.onCall(2).resolves([carsMockWithId]) 
			// .onCall(3).resolves(null);
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Car', () => {
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

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const frameCreated = await frameService.readOne(carsMockWithId._id);

			expect(frameCreated).to.be.deep.equal(carsMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await frameService.readOne(carsMockWithId._id);
			} catch (err:any) {
				error = err;
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('ReadAll Cars', () => {
		it('Success', async () => {
			const frameCreated = await frameService.read();

			expect(frameCreated).to.be.deep.equal([carsMockWithId]);
		});

		it('Failure', async () => {
			let error;
			try {
				await frameService.read();
			} catch (err:any) {
				error = err;
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});
});