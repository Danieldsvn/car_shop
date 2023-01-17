import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createmotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createmotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const allmotorcycles = await motorcycleODM.getAll();
    const allmotorcyclesRefined = allmotorcycles
      .map((motorcycle) => this.createmotorcycleDomain(motorcycle));
    return allmotorcyclesRefined;
  }

  public async getById(_id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getById(_id);
    if (motorcycle === null) return null;
    return this.createmotorcycleDomain(motorcycle);
  }

  public async update(_id: string, obj: Partial<IMotorcycle>) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleModified = await motorcycleODM.update(_id, obj);
    if (motorcycleModified === null) return null;
    return this.createmotorcycleDomain(motorcycleModified);
  }
}

export default MotorcycleService;