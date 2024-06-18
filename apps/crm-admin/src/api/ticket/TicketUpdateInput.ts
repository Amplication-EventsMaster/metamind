import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { FeeUpdateManyWithoutTicketsInput } from "./FeeUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  fees?: FeeUpdateManyWithoutTicketsInput;
  price?: number | null;
  seatNumber?: string | null;
};
