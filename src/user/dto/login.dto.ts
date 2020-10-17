import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginDto {
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
