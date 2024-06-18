import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerTypeWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  typeName?: StringNullableFilter;
};
