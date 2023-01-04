import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Inject,
    Post,
    Req,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { User } from '../user.entity';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    @Inject(AuthService)
    private readonly service: AuthService;

    @Post('register')
    @UseInterceptors(ClassSerializerInterceptor)
    private register(@Body() body: RegisterDto): Promise<User | never> {
        return this.service.register(body);
    }

    @Post('login')
    private login(@Body() body: LoginDto): Promise<string | never> {
        return this.service.login(body);
    }

    @Post('refresh')
    @UseGuards(JwtAuthGuard)
    private refresh(@Req() user: Request): Promise<string | never> {
        return this.service.refresh(<User>(<unknown>user));
    }
}
