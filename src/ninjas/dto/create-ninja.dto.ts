//npm i --save class-validator class-transformer

import { IsEnum, MinLength } from "class-validator";

export class createNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'sword'], {message: "Use correct weapon!"})
    weapon: 'stars' | 'sword'
}