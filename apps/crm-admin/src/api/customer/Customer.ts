import { CustomerType } from "../customerType/CustomerType";
import { Ticket } from "../ticket/Ticket";

export type Customer = {
  createdAt: Date;
  customerType?: CustomerType | null;
  dateOfBirth: Date | null;
  email: string;
  id: string;
  name: string | null;
  phone: string;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
