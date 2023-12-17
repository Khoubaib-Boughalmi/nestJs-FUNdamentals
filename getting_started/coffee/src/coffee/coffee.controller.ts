import { Body, Controller, Get, Param } from '@nestjs/common';

interface coffeeInterface {
    "name": string,
    "price": number
}

@Controller('coffee')
export class CoffeeController {
    @Get('taste')
    findAll() {
        return "yoo this coffeee is good";
    }

    @Get(':id')
    findOne(@Body() body: coffeeInterface , @Param('id') id: string) {
        if (!body.name || !body.price) throw new Error("missing data");
        return `coffe with id: #${id} was requested with ${body.name}`;
    }
}
