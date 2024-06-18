import { CustomerTypeWhereUniqueInput } from "../customerType/CustomerTypeWhereUniqueInput";
import { TicketCreateNestedManyWithoutCustomersInput } from "./TicketCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerType?: CustomerTypeWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  email: string;
  name?: string | null;
  phone: string;
  tickets?: TicketCreateNestedManyWithoutCustomersInput;
};
