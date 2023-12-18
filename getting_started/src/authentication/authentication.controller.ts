import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from "./authentication.service"
import { signInDto } from "../authentication/dto/authentication.signInDto"

@Controller('auth')
export class AuthenticationController {
    constructor (private readonly authenticationService: AuthenticationService){}

    @Post("signin")
    signin(@Body() signInData: signInDto) {
        return this.authenticationService.signIn(signInData.username, signInData.password);
    }
            
}