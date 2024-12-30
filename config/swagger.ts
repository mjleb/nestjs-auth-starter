import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('auth')
  .build();
export const optionsSwagger: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
};
