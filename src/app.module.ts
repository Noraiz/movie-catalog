import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MovieModule } from './movie/movie.module';
import { UserModule } from './user/user.module';
import { MovieReviewModule } from './movie-review/movie-review.module';
import { SearchModule } from './search/search.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, MovieModule, UserModule, MovieReviewModule, SearchModule, AuthenticationModule],
})
export class AppModule { }
