import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelController } from './controllers/hotel.controller';
import { AuthConfig } from './config/auth.config';
import { AuthController } from './controllers/auth.controller';
import { LocationController } from './controllers/location.controller';
import { HotelService } from './services/hotel.service';
import { LocationService } from './services/location.service';
import { PrismaService } from './services/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './services/auth.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BookingController } from './controllers/booking.controller';
import { BookingService } from './services/booking.service';
import { ConfigModule } from '@nestjs/config';
import { PricingController } from './controllers/pricing.controller';
import { PricingService } from './services/pricing.service';
/* eslint-disable */
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../frontend/', 'build'),
      exclude: ['/api*'],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule.forRoot(),
  ],
  controllers: [
    AppController,
    LocationController,
    HotelController,
    AuthController,
    BookingController,
    PricingController,
  ],
  providers: [
    PrismaService,
    AppService,
    LocationService,
    HotelService,
    AuthConfig,
    JwtStrategy,
    AuthService,
    BookingService,
    PricingService
  ],
})
export class AppModule {}
