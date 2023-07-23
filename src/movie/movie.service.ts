import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly repository: Repository<Movie>,
  ) { }
  create(createMovieDto: CreateMovieDto) {
    return this.repository.save(createMovieDto);
  }

  findAll() {
    return `This action returns all movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    throw new NotImplementedException();
  }

}
