import { Controller } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { LoginInput, RegisterInput } from "./inputs/user.input";
import { User } from "./user.entity";
import { UsersService } from "./user.service";

const pubSub = new PubSub();

@Controller()
@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}
  @Subscription(() => User)
  userAdded() {
    pubSub.asyncIterator("userAdded");
  }

  @Query(() => User)
  async user(@Args({ name: "userId", type: () => String }) userId: string) {
    return await this.usersService.findOne(userId);
  }

  @Query(() => [User])
  async users() {
    return await this.usersService.findAll();
  }

  @Mutation(() => RegisterDto)
  async register(
    @Args({ name: "input", type: () => RegisterInput }) input: RegisterInput,
  ) {
    const user = await this.usersService.register(input);
    const publish = await pubSub.publish("userAdded", {
      userAdded: user,
    });
    console.log(publish);
    return user;
  }

  @Mutation(() => LoginDto)
  async login(
    @Args({ name: "input", type: () => LoginInput }) input: LoginInput,
  ) {
    return await this.usersService.login(input);
  }
}
