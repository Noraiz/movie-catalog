import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Movie } from 'src/movie/entities/movie.entity';

interface MovieSearchResult {
    hits: {
        total: number;
        hits: Array<{
            _source: Partial<Movie>;
        }>;
    };
}

@Injectable()
export class SearchService {
    private readonly INDEX = 'movie';
    constructor(
        private readonly elasticsearchService: ElasticsearchService,
    ) { }

    async indexMovie(movie: Movie) {
        //<MovieSearchResult, MovieSearchBody>
        return this.elasticsearchService.index({
            index: this.INDEX,
            body: {
                id: movie.id,
                name: movie.title,
                description: movie.description,
                genre: movie.genre
            }
        })
    }

    async search(text: string) {
        const result = await this.elasticsearchService.search<MovieSearchResult>({
            index: this.INDEX,
            body: {
                query: {
                    multi_match: {
                        query: text,
                        fields: ['name', 'description']
                    }
                }
            }
        });

        const hits = result.hits.hits;
        return hits.map((item) => item._source);
    }

}
