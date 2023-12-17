import { Get, HttpException, HttpStatus, Injectable, NotFoundException, Param } from "@nestjs/common";
import { coffee } from "../coffees/enteties/coffee.entety";
import { throwError } from "rxjs";
import { CreateCoffeeDto } from "./dto/create-coffee.dto/create-coffee.dto";

//any interaction with DB
@Injectable()
export class CoffeesService {
    private coffees: coffee[] = [{
        "id": 1,
        "name": "arabica",
        "quantity": 55
    }]
    
    findAll () {
        return this.coffees;
    }

    findOne (id: number) {
        const selectedCoffee = this.coffees.filter((c) => c.id == id);
        if(!selectedCoffee.length)
            throw new NotFoundException("no coffee with such id")
        // throw new HttpException("no coffee with such id", HttpStatus.NOT_FOUND);
        return selectedCoffee;
    }
    
    createOne (coffeeData: CreateCoffeeDto) {
        this.coffees.push(coffeeData);
        return coffeeData;
    }
    
}