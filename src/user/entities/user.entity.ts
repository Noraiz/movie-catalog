import { MovieReview } from "src/movie-review/entities/movie-review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column({ unique: true })
    password:string;

    @OneToMany(() => MovieReview, (movieReview) => movieReview.user)
    movieReviews: MovieReview[]
}
