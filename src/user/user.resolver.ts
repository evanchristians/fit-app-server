import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UsersService } from "./user.service";
import { UserInput } from "./inputs/user.input";
import { CreateUserDto } from "./dto/create-user.dto";
import { Controller } from "@nestjs/common";

@Controller()
@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => String)
  async user() {
    return "helloWorld";
  }

  @Query(returns => [User])
  async users() {
    return await this.usersService.findAll();
  }

  @Mutation(returns => CreateUserDto)
  async createUser(
    @Args({ name: "input", type: () => UserInput }) input: UserInput,
  ) {
    return await this.usersService.create(input);
  }
}
