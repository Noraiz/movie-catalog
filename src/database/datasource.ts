import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions,createDatabase } from 'typeorm-extension';

(async () => {
const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    database: 'movie-catalog',
    password: process.env.POSTGRES_PASSWORD,
    port:5432, 
    username:process.env.POSTGRES_USER,

    seeds: [process.env.TYPEORM_SEEDING_SEEDS],
};
await createDatabase({
    options
});

const dataSource = new DataSource(options);
await dataSource.initialize();
})();