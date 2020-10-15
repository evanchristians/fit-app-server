import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {

  async create(input: CreateUserDto): Promise<User> {
    const user = new User();
    user.lastName = input.lastName;
    user.firstName = input.firstName;
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await User.find();
  }

  async findOne(id: string): Promise<User> {
    return await User.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await User.delete(id);
  }
}
