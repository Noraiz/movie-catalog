import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthenticationService } from './authentication.service';

@Module({
    imports: [
      UserModule,
      ConfigModule,
      JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
          },
        }),
      }),
    ],
    providers: [AuthenticationService, ],//LocalStrategy
    controllers: []//AuthenticationController
  })
export class AuthenticationModule {}
