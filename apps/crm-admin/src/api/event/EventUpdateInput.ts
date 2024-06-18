import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  eventName?: string | null;
  location?: string | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
};
