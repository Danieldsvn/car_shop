import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle { 
  private category: string;
  private engineCapacity: number;

  constructor(motorcycleAtributtes: IMotorcycle) {
    const {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    } = motorcycleAtributtes; 
    super({ id, model, year, color, status, buyValue });        
    this.category = category;
    this.engineCapacity = engineCapacity;
  }  

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;