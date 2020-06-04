export class OrderData {
  id?: string;
  klantnaam?: string;
  product?: string;
  aantal?: number;
  prijs?: string;
  straat?: string;
  postcode?: string;
  stad?: string;
  land?: string;
  orderDate?: string;
  stage?: Stage
  changeLog?: ChangeLog[]

  static deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export class ChangeLog {
  currentStage: Stage;
  eventDate: string;
  ip: string
}

export enum Stage {
  toAccept,
  toProcess,
  toShip,
  shipped
}