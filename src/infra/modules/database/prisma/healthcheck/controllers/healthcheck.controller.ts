import { Controller, Get, HttpCode } from '@nestjs/common';

import { HealthcheckService } from '../services/healthcheck.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthcheckControllerInterface } from './healthcheck.controller.interface';
import { StatusHealthcheckResDto } from '../dtos/status-healthcheck-res.dto';

@ApiTags('healthcheck')
@Controller('healthcheck')
export class HealthcheckController implements HealthcheckControllerInterface {
    constructor(private readonly healthcheckService: HealthcheckService) {}

    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get status if Server is OK' })
    @ApiResponse({
        status: 200,
        description: 'ok',
        type: StatusHealthcheckResDto,
    })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async status() {
        return this.healthcheckService.status();
    }
}
