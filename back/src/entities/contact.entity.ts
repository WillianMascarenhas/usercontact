import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  fullName: string;
  @Column({ unique: true })
  email: string;
  @Column()
  phone: string;
  @Column({ readonly: true, default: new Date() })
  createdAt: Date;

  @ManyToOne(() => User)
  user: User
}
