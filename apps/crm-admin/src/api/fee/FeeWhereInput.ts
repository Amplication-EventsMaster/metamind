import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type FeeWhereInput = {
  amount?: FloatNullableFilter;
  datePaid?: DateTimeNullableFilter;
  id?: StringFilter;
  ticket?: TicketWhereUniqueInput;
};
