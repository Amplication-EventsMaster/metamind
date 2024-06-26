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
import { FeeWhereUniqueInput } from "./FeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FeeUpdateInput } from "./FeeUpdateInput";

@ArgsType()
class UpdateFeeArgs {
  @ApiProperty({
    required: true,
    type: () => FeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeeWhereUniqueInput)
  @Field(() => FeeWhereUniqueInput, { nullable: false })
  where!: FeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => FeeUpdateInput)
  @Field(() => FeeUpdateInput, { nullable: false })
  data!: FeeUpdateInput;
}

export { UpdateFeeArgs as UpdateFeeArgs };
