import { CustomerUpdateManyWithoutCustomerTypesInput } from "./CustomerUpdateManyWithoutCustomerTypesInput";

export type CustomerTypeUpdateInput = {
  customers?: CustomerUpdateManyWithoutCustomerTypesInput;
  typeName?: string | null;
};
