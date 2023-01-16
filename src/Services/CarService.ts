import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    return this.createCarDomain(car);
  }
}

export default CarService;