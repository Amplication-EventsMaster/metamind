import { Customer } from "../customer/Customer";

export type CustomerType = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  typeName: string | null;
  updatedAt: Date;
};
