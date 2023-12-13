import { Controller, Get } from "@nestjs/common";

@Controller("/coffee")
export class CoffeesController {
    @Get()
    findAll () {
        return "ALL DATA RETURNED";
    }
}