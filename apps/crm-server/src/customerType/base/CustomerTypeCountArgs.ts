/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerTypeWhereInput } from "./CustomerTypeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomerTypeCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerTypeWhereInput,
  })
  @Field(() => CustomerTypeWhereInput, { nullable: true })
  @Type(() => CustomerTypeWhereInput)
  where?: CustomerTypeWhereInput;
}

export { CustomerTypeCountArgs as CustomerTypeCountArgs };