import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoffeesController } from './coffees.controller';
import { AppService } from './app.service';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
