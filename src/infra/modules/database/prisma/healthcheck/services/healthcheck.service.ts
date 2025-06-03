import { StatusHealthcheckResDto } from '../dtos/status-healthcheck-res.dto';
import { HealthcheckServiceInterface } from './healthcheck.service.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthcheckService implements HealthcheckServiceInterface {
  constructor() {}

  status(): StatusHealthcheckResDto {
    return {
      appName: process.env.APPNAME || 'DefaultAppName',
      appVersion: process.env.APPVERSION || '1.0.0',
    };
  }
}
