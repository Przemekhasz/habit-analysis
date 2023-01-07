import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { Profile } from './profile.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: number;

  @Column({ type: 'varchar' })
  public email: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  public username: string | null;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  public createdAt: Date | null;

  @OneToOne(() => Profile)
  @JoinColumn()
  @IsOptional()
  public profile?: Profile | null;

  @OneToMany(() => Post, (post) => post.user)
  @IsOptional()
  public posts?: Post[] | null;
}
