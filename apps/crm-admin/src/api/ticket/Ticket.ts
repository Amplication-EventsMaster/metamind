import { Customer } from "../customer/Customer";
import { Event } from "../event/Event";
import { Fee } from "../fee/Fee";

export type Ticket = {
  createdAt: Date;
  customer?: Customer | null;
  event?: Event | null;
  fees?: Array<Fee>;
  id: string;
  price: number | null;
  seatNumber: string | null;
  updatedAt: Date;
};
