import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from "./authentication.service"

@Controller('auth')
export class AuthenticationController {
    constructor (private readonly authenticationService: AuthenticationService){}

    @Get("login")
    login(): string {
        return "Loged in"
    }
}