import { InputType, Field, ID } from "@nestjs/graphql";

@InputType()
export class UserInput {
  // @Field(() => ID)
  // id: string;
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
}
