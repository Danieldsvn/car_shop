import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const allCars = await carODM.getAll();
    const allCarsRefined = allCars.map((car) => this.createCarDomain(car));
    return allCarsRefined;
  }

  public async getById(_id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(_id);
    if (car === null) return null;
    return this.createCarDomain(car);
  }
}

export default CarService;