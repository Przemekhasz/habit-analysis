import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/user.entity';
import { Profile } from '../typeorm/entities/profile.entity';
import { Post } from '../typeorm/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post]), AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
