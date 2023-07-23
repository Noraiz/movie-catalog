import { Module } from '@nestjs/common';
import { MovieReviewService } from './movie-review.service';
import { MovieReviewController } from './movie-review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieReview } from './entities/movie-review.entity';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [MovieReviewController],
  providers: [MovieReviewService],
  imports:[
    TypeOrmModule.forFeature([MovieReview]),
    JwtModule,
    ConfigModule
  ]
})
export class MovieReviewModule {}
