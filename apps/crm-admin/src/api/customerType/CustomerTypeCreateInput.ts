import { CustomerCreateNestedManyWithoutCustomerTypesInput } from "./CustomerCreateNestedManyWithoutCustomerTypesInput";

export type CustomerTypeCreateInput = {
  customers?: CustomerCreateNestedManyWithoutCustomerTypesInput;
  typeName?: string | null;
};
