import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //application instance is created here
  const app = await NestFactory.create(AppModule);

  //middleware is applied here
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //application starts here
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
