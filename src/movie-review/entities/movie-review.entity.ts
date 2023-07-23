import { Movie } from "src/movie/entities/movie.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MovieReview {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Movie)
    movie: Movie;

}
