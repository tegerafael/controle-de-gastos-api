import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StatusHealthcheckResDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    appName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    appVersion: string;
}
