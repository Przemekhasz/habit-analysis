import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { User } from '../typeorm/entities/user.entity';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: User): any {
    return user;
  }

  public async canActivate(ctx: ExecutionContext): Promise<boolean> {
    await super.canActivate(ctx);

    const user: Request = ctx.switchToHttp().getRequest();

    return !!user;
  }
}
