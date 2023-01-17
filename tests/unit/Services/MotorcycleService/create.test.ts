import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Deve criar uma moto', function () {
  it('Deve criar uma moto com sucesso', async function () {
    const validMotorcycleWithStatusInput: IMotorcycle = {
      model: 'Honda CG Titan 160',
      year: 2021,
      color: 'Red',
      status: true,
      buyValue: 8.500,
      category: 'Street',
      engineCapacity: 160,
    };
    const preOutputMotorcycle = {
      id: '63319d80feb9f483ee829ac8',
      ...validMotorcycleWithStatusInput,
    };
    const outputMotorcycle: Motorcycle = new Motorcycle(preOutputMotorcycle);
    Sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(validMotorcycleWithStatusInput);

    expect(result).to.be.deep.equal(outputMotorcycle);
    Sinon.restore();
  });
});