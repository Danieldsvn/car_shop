import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('Teste da função update pelo Id', function () {
  it('deve retornar corretamente o carro modificado quando o Id for correto', async function () {
    const correctId = '63319d80feb9f483ee823ac9';
    // const oldPrice = 15.990;
    const newPrice = 14.500;
    // const car: ICar = {
    //   id: correctId,
    //   model: 'Bora',
    //   year: 1999,
    //   color: 'Green',
    //   status: true,
    //   buyValue: oldPrice,
    //   doorsQty: 4,
    //   seatsQty: 5,
    // };

    const carMods: Partial<ICar> = {
      buyValue: 14.500,
    };

    const carModified: ICar = {
      id: correctId,
      model: 'Bora',
      year: 1999,
      color: 'Green',
      status: true,
      buyValue: newPrice,
      doorsQty: 4,
      seatsQty: 5,
    };

    Sinon.stub(Model, 'findByIdAndUpdate').resolves(carModified);

    const service = new CarService();
    const result = await service.update(correctId, carMods);

    expect(result).to.be.deep.equal(carModified);
    Sinon.restore();
  });
});