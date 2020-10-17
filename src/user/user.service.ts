import { Injectable } from "@nestjs/common";
import { hash, compareSync } from "bcrypt";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  async register(input: RegisterDto): Promise<User> {
    const existingUser = await User.findOne({ email: input.email });

    if (existingUser) {
      throw new Error("Account already exists, poes");
    }

    const hashedPassword = await hash(input.password, 12);

    const newUser = new User();

    newUser.email = input.email;
    newUser.password = hashedPassword;
    newUser.firstName = input.firstName;
    newUser.lastName = input.lastName;

    return await newUser.save();
  }

  async login(input: LoginDto): Promise<User> {
    const user = await User.findOne({ email: input.email });

    if (!user) throw new Error("User not found");
    if (!compareSync(input.password, user.password))
      throw new Error("Password Incorrect!");

    return user;
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
