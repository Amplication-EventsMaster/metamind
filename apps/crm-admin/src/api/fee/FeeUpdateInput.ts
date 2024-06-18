import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type FeeUpdateInput = {
  amount?: number | null;
  datePaid?: Date | null;
  ticket?: TicketWhereUniqueInput | null;
};
