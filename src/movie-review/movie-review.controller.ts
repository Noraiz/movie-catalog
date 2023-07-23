import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { MovieReviewService } from './movie-review.service';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';
import { AuthGuard } from 'src/authentication/authentication.guard';
import { Request } from 'express';

@Controller('movie-review')
export class MovieReviewController {
  constructor(private readonly movieReviewService: MovieReviewService) { }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMovieReviewDto: CreateMovieReviewDto, @Req() request: Request) {
    const user = request['user'];
    return this.movieReviewService.create({ ...createMovieReviewDto, userId: user.id });
  }

  @Get()
  findAll() {
    return this.movieReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieReviewDto: UpdateMovieReviewDto) {
    return this.movieReviewService.update(+id, updateMovieReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieReviewService.remove(+id);
  }
}
