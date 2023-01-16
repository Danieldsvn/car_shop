import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;  
  private doorsQty: number;
  private seatsQty: number;

  constructor(carAtributtes: ICar) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = carAtributtes;    
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;    
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }  

  private setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  private getDoorsQty() {
    return this.doorsQty;
  }

  private setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  private getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;