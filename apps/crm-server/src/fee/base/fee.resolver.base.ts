/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Fee } from "./Fee";
import { FeeCountArgs } from "./FeeCountArgs";
import { FeeFindManyArgs } from "./FeeFindManyArgs";
import { FeeFindUniqueArgs } from "./FeeFindUniqueArgs";
import { CreateFeeArgs } from "./CreateFeeArgs";
import { UpdateFeeArgs } from "./UpdateFeeArgs";
import { DeleteFeeArgs } from "./DeleteFeeArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { FeeService } from "../fee.service";
@graphql.Resolver(() => Fee)
export class FeeResolverBase {
  constructor(protected readonly service: FeeService) {}

  async _feesMeta(
    @graphql.Args() args: FeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Fee])
  async fees(@graphql.Args() args: FeeFindManyArgs): Promise<Fee[]> {
    return this.service.fees(args);
  }

  @graphql.Query(() => Fee, { nullable: true })
  async fee(@graphql.Args() args: FeeFindUniqueArgs): Promise<Fee | null> {
    const result = await this.service.fee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Fee)
  async createFee(@graphql.Args() args: CreateFeeArgs): Promise<Fee> {
    return await this.service.createFee({
      ...args,
      data: {
        ...args.data,

        ticket: args.data.ticket
          ? {
              connect: args.data.ticket,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Fee)
  async updateFee(@graphql.Args() args: UpdateFeeArgs): Promise<Fee | null> {
    try {
      return await this.service.updateFee({
        ...args,
        data: {
          ...args.data,

          ticket: args.data.ticket
            ? {
                connect: args.data.ticket,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Fee)
  async deleteFee(@graphql.Args() args: DeleteFeeArgs): Promise<Fee | null> {
    try {
      return await this.service.deleteFee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Ticket, {
    nullable: true,
    name: "ticket",
  })
  async getTicket(@graphql.Parent() parent: Fee): Promise<Ticket | null> {
    const result = await this.service.getTicket(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}