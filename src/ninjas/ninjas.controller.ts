import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { createNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    
    constructor(private readonly ninjaService: NinjasService) {}

    // GET /ninjas ==> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
        return this.ninjaService.getNinjas(weapon);
    }

    // GET /ninjas/:id ---> {...}
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.ninjaService.getNinja(id);
        } catch (err) {
            throw new NotFoundException();
        }
    }

    // POST /ninjas
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDto: createNinjaDto) {
        return this.ninjaService.createNinja(createNinjaDto)
    }

    // PUT /ninjas/:id ---> {...}
    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjaService.updateNinja(id, updateNinjaDto);
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjaService.removeNinja(id);
    }
}