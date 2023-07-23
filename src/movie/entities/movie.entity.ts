
import { MovieReview } from 'src/movie-review/entities/movie-review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    director: string;

    @Column()
    releaseDate: string;

    @Column()
    ticketPrice: string;

    @Column()
    country: string;

    @Column()
    genre: string;

    @Column()
    photo: string;

    @OneToMany(() => MovieReview, (movieReview) => movieReview.movie)
    movieReviews: MovieReview[]
}
