import { SortOrder } from "../../util/SortOrder";

export type FeeOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  datePaid?: SortOrder;
  id?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
};
