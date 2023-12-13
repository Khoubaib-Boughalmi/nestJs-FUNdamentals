import { Controller, Get, Param } from "@nestjs/common";
import { CoffeesService } from "./coffees/coffees.service";
@Controller("/coffee")
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}
    
    @Get()
    findAll() {
        return this.coffeesService.findAll();
    }
    @Get(":id")
    findOne(@Param("id") id) {
        return this.coffeesService.findOne(id);
    }
}