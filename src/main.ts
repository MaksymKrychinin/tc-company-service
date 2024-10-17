import { NestFactory } from '@nestjs/core';
import { Company-serviceModule } from './company-service/company-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Company-serviceModule);
  await app.listen(3000);
}
bootstrap();
