import { Get, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    @Get("/signIn")
    async signIn(username: string, pass: string): Promise<any> {
        try {
            const user  = await this.usersService.findOne(username);
            if(user.password != pass)
                throw new UnauthorizedException();
            const {password, ...result} = user;
            return {
                accessToken: await this.jwtService.signAsync({...result}) ,
            };
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException();
        }
    }
}
