import { Get, Injectable, Param } from "@nestjs/common";
import { coffee } from "../coffees/enteties/coffee.entety";

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
        return this.coffees.filter((c) => c.id == id);
    }
}