import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { MovieReview } from './entities/movie-review.entity';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';

@Injectable()
export class MovieReviewService {
  constructor(@InjectRepository(MovieReview) private readonly repository: Repository<MovieReview>) { }
  create(createMovieReviewDto: CreateMovieReviewDto) {
    return this.repository.save(createMovieReviewDto)
  }

  findAll() {
    return `This action returns all movieReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieReview`;
  }

  update(id: number, updateMovieReviewDto: UpdateMovieReviewDto) {
    return `This action updates a #${id} movieReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieReview`;
  }
}
