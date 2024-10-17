import { Module } from '@nestjs/common';
import { Company-serviceService } from './services/company-service.service';
import { Company-serviceController } from './controllers/company-service.controller';

@Module({
  controllers: [Company-serviceController],
  providers: [Company-serviceService],
})
export class Company-serviceModule {}
