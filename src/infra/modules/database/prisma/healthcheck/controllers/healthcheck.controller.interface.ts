import { StatusHealthcheckResDto } from '../dtos/status-healthcheck-res.dto';

export interface HealthcheckControllerInterface {
  status(): Promise<StatusHealthcheckResDto>;
}
