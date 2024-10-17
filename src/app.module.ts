import { Module } from '@nestjs/common';
import { Company-serviceModule } from './company-service/company-service.module';

@Module({
  imports: [Company-serviceModule],
})
export class AppModule {}
