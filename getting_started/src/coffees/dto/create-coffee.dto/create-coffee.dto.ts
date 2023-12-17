import { IsNumber, IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsNumber()
    readonly id: number;
    
    @IsString()
    readonly name: string;
    
    @IsNumber()
    readonly quantity: number;
}
