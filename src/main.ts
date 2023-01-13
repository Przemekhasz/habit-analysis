import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import tracer from './tracer';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const documentConfig = new DocumentBuilder()
    .setTitle('Habit')
    .setDescription('Habit Analysis')
    .setVersion('1.0')
    .addTag('habit')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);

  await tracer.start();
  await app.listen(port, () => {
    console.log('[WEB]', `http://localhost:${port}`);
  });
}
bootstrap();
