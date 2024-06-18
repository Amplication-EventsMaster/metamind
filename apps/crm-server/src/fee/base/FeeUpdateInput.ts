/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TicketWhereUniqueInput } from "../../ticket/base/TicketWhereUniqueInput";

@InputType()
class FeeUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  datePaid?: Date | null;

  @ApiProperty({
    required: false,
    type: () => TicketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TicketWhereUniqueInput)
  @IsOptional()
  @Field(() => TicketWhereUniqueInput, {
    nullable: true,
  })
  ticket?: TicketWhereUniqueInput | null;
}

export { FeeUpdateInput as FeeUpdateInput };
