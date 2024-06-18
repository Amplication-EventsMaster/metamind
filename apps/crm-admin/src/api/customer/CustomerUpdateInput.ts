import { CustomerTypeWhereUniqueInput } from "../customerType/CustomerTypeWhereUniqueInput";
import { TicketUpdateManyWithoutCustomersInput } from "./TicketUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerType?: CustomerTypeWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  email?: string;
  name?: string | null;
  phone?: string;
  tickets?: TicketUpdateManyWithoutCustomersInput;
};
