import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "seatNumber";

export const TicketTitle = (record: TTicket): string => {
  return record.seatNumber?.toString() || String(record.id);
};
