import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Movie } from './../../movie/entities/movie.entity';

export default class MovieSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(Movie);
        await repository.insert([
            {
                title: 'To Kill a Mockingbird',
                genre: 'Drama',
                country: 'USA',
                director: 'Robert Mulligan'
            },
            {
                title: 'Sully: Miracle on the Hudson',
                genre: 'Drama',
                country: 'USA',
                director: 'Clint Eastwood',
            }
        ]);

        // ---------------------------------------------------

        const userFactory = await factoryManager.get(Movie);
        // save 1 factory generated entity, to the database
        await userFactory.save();

        // save 5 factory generated entities, to the database
        // await userFactory.saveMany(5);
    }
}