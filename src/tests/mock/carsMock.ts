// ./src/tests/mocks/frameMock.ts

import { ICar } from '../../interfaces/ICar';

const carsMock: ICar = {
  model: "Ferrari Maranello",
	year: 1963,
	color: "red",
  status: true,
	buyValue: 3500000,
	doorsQty: 2,
	seatsQty: 2,
};

const carsMockWithId: ICar & { _id: string } = {
  _id: '63571b07749e83681e04faae',
  model: "Ferrari Maranello",
	year: 1963,
	color: "red",
  status: true,
	buyValue: 3500000,
	doorsQty: 2,
	seatsQty: 2,
};

export { carsMock, carsMockWithId };
