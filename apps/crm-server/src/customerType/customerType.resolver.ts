import * as graphql from "@nestjs/graphql";
import { CustomerTypeResolverBase } from "./base/customerType.resolver.base";
import { CustomerType } from "./base/CustomerType";
import { CustomerTypeService } from "./customerType.service";

@graphql.Resolver(() => CustomerType)
export class CustomerTypeResolver extends CustomerTypeResolverBase {
  constructor(protected readonly service: CustomerTypeService) {
    super(service);
  }
}
