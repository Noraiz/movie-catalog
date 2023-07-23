import { Test, TestingModule } from '@nestjs/testing';
import { MovieReviewController } from './movie-review.controller';
import { MovieReviewService } from './movie-review.service';

describe('MovieReviewController', () => {
  let controller: MovieReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieReviewController],
      providers: [MovieReviewService],
    }).compile();

    controller = module.get<MovieReviewController>(MovieReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
