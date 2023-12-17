import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CoffeesService } from "./coffees/coffees.service";
import { CreateCoffeeDto } from "./coffees/dto/create-coffee.dto/create-coffee.dto";
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
    @Post()
    createOne(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.createOne(createCoffeeDto);
    }
}