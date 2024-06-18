import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type FeeCreateInput = {
  amount?: number | null;
  datePaid?: Date | null;
  ticket?: TicketWhereUniqueInput | null;
};
