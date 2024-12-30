import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { configSwagger, optionsSwagger } from 'config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  // SwaggerModule
  const documentFactory = () =>
    SwaggerModule.createDocument(app, configSwagger, optionsSwagger);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });

  // Start server
  await app.listen(process.env.SERVER_PORT ?? 3000);
}
bootstrap();
