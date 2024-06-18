import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { FeeListRelationFilter } from "../fee/FeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  customer?: CustomerWhereUniqueInput;
  event?: EventWhereUniqueInput;
  fees?: FeeListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  seatNumber?: StringNullableFilter;
};
