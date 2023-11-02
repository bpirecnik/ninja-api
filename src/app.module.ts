import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasController } from './ninjas/ninjas.controller';
import { NinjasService } from './ninjas/ninjas.service';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [NinjasModule],
  controllers: [AppController, NinjasController],
  providers: [AppService, NinjasService],
})
export class AppModule {}
