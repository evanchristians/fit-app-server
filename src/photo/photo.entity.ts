
// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { User } from 'src/user/user.entity';

// @Entity()
// export class Photo {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   url: string;

//   @Column()
//   lastName: string;

//   @Column({ default: true })
//   isActive: boolean;

//   @ManyToOne(type => User, user => user.photos)
//   user: User
// }