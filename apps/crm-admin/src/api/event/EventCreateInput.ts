import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  eventName?: string | null;
  location?: string | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
};
