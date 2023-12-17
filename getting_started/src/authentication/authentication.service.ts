import { Get, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/dto/user.dto';

@Injectable()
export class AuthenticationService {
    constructor(private readonly usersService: UsersService){}

    @Get("/signIn")
    async signIn(username: string, pass: string): Promise<any> {
        try {
            const user  = await this.usersService.findOne(username);
            if(user.password != pass)
                throw new UnauthorizedException();
            const {password, ...result} = user;
            return result;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
