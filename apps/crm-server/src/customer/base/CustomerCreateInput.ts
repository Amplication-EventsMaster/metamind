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
import { CustomerTypeWhereUniqueInput } from "../../customerType/base/CustomerTypeWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TicketCreateNestedManyWithoutCustomersInput } from "./TicketCreateNestedManyWithoutCustomersInput";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerTypeWhereUniqueInput, {
    nullable: true,
  })
  customerType?: CustomerTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  tickets?: TicketCreateNestedManyWithoutCustomersInput;
}

export { CustomerCreateInput as CustomerCreateInput };