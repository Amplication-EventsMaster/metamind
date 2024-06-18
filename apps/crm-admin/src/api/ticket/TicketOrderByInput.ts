import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  seatNumber?: SortOrder;
  updatedAt?: SortOrder;
};
