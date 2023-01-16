import { Model } from 'mongoose';
import Sinon from 'sinon';
import ICar from '../../../../src/Interfaces/ICar';
import Car from '../../../../src/Domains/Car';
import CarService from '../../../../src/Services/CarService';

describe('Deve criar um carro', function () {
  it('Deve criar um carro com sucesso', async function () {
    const validCarWithStatusInput: ICar = {
      model: 'Uno',
      year: 1994,
      color: 'Silver',
      status: true,
      buyValue: 1800,
      doorsQty: 2,
      seatsQty: 2,
    };
    const preOutputCar = {
      id: '63319d80feb9f483ee823ac5',
      ...validCarWithStatusInput,
    };
    const outputCar: Car = new Car(preOutputCar);
    Sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const result = await service.create(validCarWithStatusInput);

    expect(result).to.be.deep.equal(outputCar);
  });
});