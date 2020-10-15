import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateUserDto {
  // @Field(() => ID)
  // id: string;
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
}
