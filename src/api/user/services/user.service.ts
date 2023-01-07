import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../typeorm/entities/user.entity';
import { Profile } from '../../typeorm/entities/profile.entity';
import { Post } from '../../typeorm/entities/post.entity';
import {
  CreateUserPostParams,
  CreateUserProfileParams,
  UpdateUserParams,
} from '../../utils/types';

@Injectable()
export class UserService {
  @InjectRepository(User) private readonly userRepository: Repository<User>;

  @InjectRepository(Profile)
  private readonly profileRepository: Repository<Profile>;

  @InjectRepository(Post) private readonly postRepository: Repository<Post>;

  public findUsers() {
    return this.userRepository.find({ relations: ['profile', 'posts'] });
  }

  public updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  public async createUserProfile(
    id: number,
    createUserProfileDetails: CreateUserProfileParams
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create profile',
        HttpStatus.BAD_REQUEST
      );
    const newProfile = this.profileRepository.create(createUserProfileDetails);
    user.profile = await this.profileRepository.save(newProfile);

    return this.userRepository.save(user);
  }

  public async createUserPost(
    id: number,
    createUserPostDetails: CreateUserPostParams
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create profile',
        HttpStatus.BAD_REQUEST
      );
    const newPost = this.postRepository.create({
      ...createUserPostDetails,
      user,
    });

    return this.postRepository.save(newPost);
  }
}
