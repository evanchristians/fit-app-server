import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RegisterDto {
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
