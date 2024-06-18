import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  eventName?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
};
