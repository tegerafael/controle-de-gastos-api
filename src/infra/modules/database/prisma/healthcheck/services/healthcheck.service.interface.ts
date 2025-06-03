import { StatusHealthcheckResDto } from '../dtos/status-healthcheck-res.dto';

export interface HealthcheckServiceInterface {
    status(): StatusHealthcheckResDto;
}
