interface ICar {
  id: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  doorsQty: number;
  seatQty: number;
}

export default ICar;