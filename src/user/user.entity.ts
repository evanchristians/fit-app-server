import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Field, ID } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  // @Column({ default: true })
  // isActive: boolean;

  // @OneToMany(
  //   type => Photo,
  //   photo => photo.user,
  // )
  // photos: Photo[];
}
