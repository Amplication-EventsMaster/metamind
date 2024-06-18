import { CustomerType as TCustomerType } from "../api/customerType/CustomerType";

export const CUSTOMERTYPE_TITLE_FIELD = "typeName";

export const CustomerTypeTitle = (record: TCustomerType): string => {
  return record.typeName?.toString() || String(record.id);
};
