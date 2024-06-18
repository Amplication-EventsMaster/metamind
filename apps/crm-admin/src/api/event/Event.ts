import { Ticket } from "../ticket/Ticket";

export type Event = {
  createdAt: Date;
  date: Date | null;
  eventName: string | null;
  id: string;
  location: string | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
