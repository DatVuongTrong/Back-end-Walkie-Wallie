import { DataSource } from 'typeorm'
import { User, Location } from './entities'

export default new DataSource({
    type: "cockroachdb",
    host: 'murky-lizard-8287.7tt.cockroachlabs.cloud',
    port: 26257,
    username: 'dat',
    password: 'YjwnHPMkSgFalLf889JyFA',
    database: 'boilermake',
    // entities: [],
    // migrations: [],
    // subscribers: ["src/subscriber/**/*.ts"],
    // type: "cockroachdb",
    // url: "postgresql://dat:YjwnHPMkSgFalLf889JyFA@murky-lizard-8287.7tt.cockroachlabs.cloud:26257/Walkwithme?sslmode=verify-full", 
    /*ssl: { rejectUnauthorized: false }, // For insecure connections only */
    ssl: true,
    synchronize: true,
    // logging: false,
    entities: [User, Location],
    migrations: [],
    migrationsRun: true
})