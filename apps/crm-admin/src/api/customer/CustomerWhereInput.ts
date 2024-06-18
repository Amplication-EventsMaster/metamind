import { CustomerTypeWhereUniqueInput } from "../customerType/CustomerTypeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type CustomerWhereInput = {
  customerType?: CustomerTypeWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringFilter;
  tickets?: TicketListRelationFilter;
};
