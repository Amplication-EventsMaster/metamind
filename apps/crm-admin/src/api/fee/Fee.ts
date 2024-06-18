import { Ticket } from "../ticket/Ticket";

export type Fee = {
  amount: number | null;
  createdAt: Date;
  datePaid: Date | null;
  id: string;
  ticket?: Ticket | null;
  updatedAt: Date;
};
