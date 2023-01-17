import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('Teste da função getAll', function () {
  it('deve retornar todos os carros', async function () {
    const carsArray: ICar[] = [
      {
        id: '63319d80feb9f483ee823ac9',
        model: 'Bora',
        year: 1999,
        color: 'Green',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63319d80feb9f483ee823ac5',
        model: 'Omega',
        year: 1995,
        color: 'Black',
        status: false,
        buyValue: 39.000,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    Sinon.stub(Model, 'find').resolves(carsArray);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carsArray);
    Sinon.restore();
  });
});