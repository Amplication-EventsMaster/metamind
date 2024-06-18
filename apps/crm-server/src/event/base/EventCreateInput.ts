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
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  eventName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  tickets?: TicketCreateNestedManyWithoutEventsInput;
}

export { EventCreateInput as EventCreateInput };
