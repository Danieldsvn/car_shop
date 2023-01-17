import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('Teste da função getById', function () {
  it('deve retornar corretamente o carro pelo Id', async function () {
    const correctId = '63319d80feb9f483ee823ac9';
    const car: ICar = {
      id: correctId,
      model: 'Bora',
      year: 1999,
      color: 'Green',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    Sinon.stub(Model, 'findById').resolves(car);

    const service = new CarService();
    const result = await service.getById(correctId);

    expect(result).to.be.deep.equal(car);
    Sinon.restore();
  });
});