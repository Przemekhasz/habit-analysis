import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { UpdateNameDto } from './user.dto';
import { User } from './user.entity';

export interface UserInterface {
    id: number;
    email: string;
    username: string;
    lastLoginAt: Date;
}

@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly repository: Repository<User>;

    public findAll(): Promise<UserInterface[]> {
        return this.repository.find();
    }

    public async updateName(body: UpdateNameDto, req: Request): Promise<User> {
        const user: User = <User>req.user;

        user.username = body.username;

        return this.repository.save(user);
    }
}
