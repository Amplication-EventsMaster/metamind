import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  eventName?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
};
