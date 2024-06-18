import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { FeeCreateNestedManyWithoutTicketsInput } from "./FeeCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  fees?: FeeCreateNestedManyWithoutTicketsInput;
  price?: number | null;
  seatNumber?: string | null;
};
