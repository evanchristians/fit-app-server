import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterInput {
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}

@InputType()
export class LoginInput {
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}

