import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Controle de Gastos')
    .setDescription(`API's do Controle de Gastos`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Swagger - Controle de Gastos',
    swaggerOptions: {
      authAction: {
        JWT: {
          name: 'JWT',
          schema: {
            type: 'apiKey',
            in: 'header',
            description: 'Coloque seu token JWT aqui',
          },
          value: 'Bearer <JWT_TOKEN>',
        },
      },
    },
  });

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000);
}
bootstrap();
